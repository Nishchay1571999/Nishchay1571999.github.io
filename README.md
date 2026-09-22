# Nishchay Bhatt — portfolio

A complete, statically exported Next.js portfolio following the three briefs in `agent-flow/`. The design uses the specified System Trace language: paper surfaces, graphite type, cobalt interaction states, connected system diagrams, and clearly labeled project maturity.

## Repository standard

**Use pnpm for every dependency and script command.** pnpm 10.30.2 is pinned in `packageManager`; `pnpm-lock.yaml` is the only dependency lockfile. The preinstall guard rejects installation through other package managers. Node.js 22 is the default in `.nvmrc` and `.node-version`; the application supports Node.js 20.9 and newer.

```sh
nvm use
corepack enable
pnpm install
pnpm dev
```

Open http://localhost:3000.

```sh
pnpm check           # ESLint, TypeScript, Prettier
pnpm format          # Format project files
pnpm build           # Static production export in out/
pnpm preview         # Compressed production preview on http://127.0.0.1:4173
pnpm test:e2e        # Browser, accessibility, responsiveness, navigation
```

First-time browser setup: `pnpm exec playwright install chromium`. Run `pnpm build` before the browser tests; they verify the actual static export, not the development server.

The production output is static. Serve `out/` with a static host; `next start` is not used for this export. Configure the host to serve `.html` files for extensionless routes and `404.html` for missing pages.

## Pages and content

- `/`: positioning, contextual production evidence, product surfaces, selected work, packages, experience, principles, and contact.
- `/work`: curated work index.
- `/work/hirobin`: sanitized production contribution case study.
- `/work/operations-console`: explicitly provisional architecture and validation plan.
- `/work/latch`: published audit tooling, decisions, and limitations.
- `/open-source`: all five public packages and source links.
- `/about`: career narrative and experience.
- `/contact`: mailto, email copy, social links, and résumé download.
- `/resume.pdf`: corrected public copy of the supplied one-page résumé.

Repeated facts live in `src/content/site.ts`; project narratives live in `src/content/work.ts`. Server components render all static content. Only navigation and email copy require client JavaScript. Fonts are self-hosted through Fontsource packages.

## Responsive and accessibility rules

The source of truth remains `agent-flow/PORTFOLIO_DESIGN_SPECIFICATION.md`, sections 15–18 and 26.

- Verify 320, 390, 768, 1024, 1280, 1440, and 1920px widths.
- Stack product surfaces below 760px; stack project records below 850px; turn metadata rails into inline content below 1024px.
- Keep the same engineering evidence at every width, with no horizontal page scrolling.
- Mobile navigation supports keyboard focus, Escape, and a usable no-JavaScript fallback.
- Use visible focus, color-plus-text statuses, semantic headings, figure captions, and reduced-motion support.
- Browser checks cover every route with axe WCAG AA checks, all seven widths, menu behavior, PDF responses, clipboard behavior, disclosures, 404, and no-JavaScript navigation.

## Evidence and asset provenance

The three `agent-flow` briefs and supplied résumé are the initial source of truth. The additional HiRobin contribution synopsis supplied on 22 September 2026 updates its case study with September product-scale figures, core call-handling work, startup cache ownership, release responsibilities, and payment-state implementation. These claims are user-supplied and have not been independently audited. Private repository names, raw internal activity, revenue, and conversion data are not published.

The résumé resolves the employer naming ambiguity in favor of **Buzzworthy** and **SDE 1 at Jumbo Gaming**. Its public copy removes the phone number and corrects GitHub and LinkedIn links; the original in `docs/` is unchanged. The résumé otherwise remains the supplied document rather than being rewritten with the new contribution synopsis. Regenerating this asset requires PyMuPDF and `python3 scripts/prepare-resume.py`; PDF processing is not a runtime or build dependency.

Project visuals are original HTML/CSS diagrams, not fabricated production screenshots. HiRobin diagrams are sanitized responsibility maps; the operations-console diagram is a proposal, and no completed deployment or measured performance is claimed. Package versions are dated to the supplied review instead of represented as live registry data.

## Deployment

Run `pnpm build` and deploy `out/`, or connect the repository to a Next.js-compatible host with pnpm as the package manager. No backend, analytics, external fonts, or secrets are required. Set `SITE_URL` to the final public origin before building (see `.env.example`); Vercel’s production URL is detected automatically. Generate a sitemap when a domain is selected. The Open Graph image is `/og.png`; regenerate it with `pnpm social:generate` after changing `public/og.svg`.

CI installs with the frozen pnpm lockfile, verifies formatting/lint/types, builds the static site, and runs browser tests. The original application was removed from the repository and retained in `/private/tmp/portfolio-previous.qsfdea` for recovery; Git history is intact.

Framework setup references: [Next.js installation](https://nextjs.org/docs/app/getting-started/installation) and [Tailwind PostCSS integration](https://tailwindcss.com/docs/installation/using-postcss).
