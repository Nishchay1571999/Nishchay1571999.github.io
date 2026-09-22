import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const origin = process.env.PORTFOLIO_PREVIEW_URL || 'http://127.0.0.1:3000';
const directory = 'test-results/visual-review';
await mkdir(directory, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage();
for (const [name, path, width, height] of [
  ['home-desktop', '/', 1440, 1000],
  ['home-mobile', '/', 390, 844],
  ['home-compact', '/', 320, 568],
  ['hirobin-desktop', '/work/hirobin', 1440, 1000],
  ['hirobin-mobile', '/work/hirobin', 390, 844],
  ['contact-mobile', '/contact', 390, 844],
  ['open-source-desktop', '/open-source', 1440, 1000],
]) {
  await page.setViewportSize({ width, height });
  await page.goto(`${origin}${path}`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${directory}/${name}.png`, fullPage: true });
  if (path === '/')
    await page.screenshot({ path: `${directory}/${name}-viewport.png` });
}
await browser.close();
console.log(`Visual review screenshots saved in ${directory}.`);
