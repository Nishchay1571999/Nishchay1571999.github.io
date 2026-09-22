import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = [
  '/',
  '/work',
  '/work/hirobin',
  '/work/operations-console',
  '/work/latch',
  '/open-source',
  '/about',
  '/contact',
];

test('Every page is reachable, accessible, and has one primary heading', async ({
  page,
}) => {
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.getByRole('main')).toBeVisible();
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(
      results.violations,
      `${route}: ${JSON.stringify(results.violations)}`,
    ).toEqual([]);
  }
});

test('All pages reflow without horizontal overflow at specified breakpoints', async ({
  page,
}) => {
  for (const width of [320, 390, 768, 1024, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route);
      const dimensions = await page.evaluate(() => ({
        scroll: document.documentElement.scrollWidth,
        viewport: window.innerWidth,
      }));
      expect(dimensions.scroll, `${route} at ${width}px`).toBeLessThanOrEqual(
        dimensions.viewport,
      );
    }
  }
});

test('Mobile navigation supports focus, Escape, active route, and navigation', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Menu +' });
  await menu.click();
  const work = page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Work', exact: true });
  await expect(work).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await menu.click();
  await work.click();
  await expect(page).toHaveURL('/work');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await menu.click();
  await expect(work).toHaveAttribute('aria-current', 'page');
});

test('Email copy and resume download have real results', async ({
  page,
  context,
  request,
}) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Copy email' }).click();
  await expect(page.getByRole('status')).toHaveText('Copied');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    'nishchay.bhat@gmail.com',
  );
  const resume = await request.get('/resume.pdf');
  expect(resume.status()).toBe(200);
  expect(resume.headers()['content-type']).toContain('application/pdf');
  expect((await resume.body()).subarray(0, 5).toString()).toBe('%PDF-');
});

test('Core content and mobile navigation work without JavaScript', async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Work', exact: true })
    .click();
  await expect(page).toHaveURL('/work');
  await expect(
    page.getByRole('heading', {
      name: 'The interface is only part of the story.',
    }),
  ).toBeVisible();
  await context.close();
});

test('Technical disclosure opens and unknown routes return 404', async ({
  page,
}) => {
  await page.goto('/open-source');
  await page.getByText('Under the native boundary', { exact: true }).click();
  await expect(page.locator('details')).toHaveAttribute('open', '');
  const response = await page.goto('/not-a-project');
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole('heading', { name: 'This path does not resolve.' }),
  ).toBeVisible();
});
