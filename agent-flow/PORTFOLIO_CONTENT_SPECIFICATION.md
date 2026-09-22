# Nishchay Bhatt - Portfolio Content Specification

**Purpose:** Provide the final information architecture, content hierarchy, writing rules, draft copy, case-study structure, source map, and maintenance model for a recruiter-first portfolio.

**Primary goal:** Convert a qualified visitor into one of three actions: read a relevant case study, download the résumé, or contact Nishchay.

**Secondary goal:** Give an engineering interviewer enough depth to form useful technical questions before the interview.

**Non-goal:** Catalog every repository, technology, experiment, or job responsibility.

---

## 1. Content strategy

### The visitor's questions

The site must answer these questions in order:

1. What kind of engineer is Nishchay?
2. Has he shipped software at meaningful scale?
3. What difficult problems has he personally owned?
4. What technical depth differentiates him from another React or React Native candidate?
5. Can I inspect credible work?
6. Is he relevant to my role?
7. How do I contact him?

### Content rule

Every homepage block must provide either **category**, **proof**, **depth**, or **conversion**. If it provides none of these, remove it.

### Recommended public narrative

> Nishchay is a frontend and mobile engineer with a strong React/React Native center. He has shipped real-time products at scale, integrated native Android capabilities, built payment and telephony workflows, improved client performance, and published tools that make lifecycle and package risk explicit.

This narrative is defensible from the resume and public repositories. It is more useful to hiring teams than “full-stack engineer” or “software developer.”

## 2. Site map

### Required launch pages

| Route | Purpose | Primary CTA |
| --- | --- | --- |
| `/` | Fast hiring overview and selected proof | View selected work |
| `/work` | Curated project and experience index | Open a case study |
| `/work/hirobin` | Production mobile/native ownership | Discuss this work |
| `/work/operations-console` | Senior web/frontend architecture proof | View architecture |
| `/work/latch` | Developer-tool and systems-thinking proof | View source/packages |
| `/open-source` | Published package index | Open repository/npm |
| `/about` | Career narrative, working style, experience | Download résumé |
| `/contact` | Frictionless recruiter contact | Send email |
| `/resume.pdf` | Current one-page résumé | Download |

### Optional pages after launch

| Route | Add only when |
| --- | --- |
| `/work/appcycle` | Screenshots, architecture notes, and tested integration evidence are available |
| `/work/rn-bootloader` | The README and examples clearly document the current public release |
| `/notes` | At least three strong technical notes exist |
| `/notes/[slug]` | The note teaches a concrete decision or investigation |
| `/now` | It can be maintained at least monthly |

Do not launch an empty blog, a “coming soon” page, or a project page built from a README alone.

## 3. Global navigation

### Recommended labels

- Work
- Open Source
- About
- Résumé
- Contact

### Behavior

- Name/logo returns to home.
- `Résumé` is a direct file link and opens in a new tab only when the browser would otherwise replace a complex page state.
- `Contact` is visually emphasized but not styled as a large marketing button.
- GitHub and LinkedIn belong in the footer and contact page, not the primary navigation.
- Current route uses a visible text and color state; do not rely on color alone.

## 4. Homepage content specification

### Section order

1. Hero and availability.
2. Proof strip.
3. Product-surface proof.
4. Selected work.
5. Open-source systems.
6. Experience snapshot.
7. How I work.
8. Current direction.
9. Contact close.

This sequence starts with an easy hiring category, proves it, then adds technical personality.

### 4.1 Hero

#### Eyebrow

`NISHCHAY BHATT / FRONTEND & MOBILE ENGINEER`

#### Recommended headline

> I build product interfaces that hold up when the system gets complicated.

#### Supporting copy

> React and React Native engineer with 4+ years of experience across real-time applications, native Android integrations, payments, telephony, operational tooling, and client performance.

#### Metadata row

- Bengaluru, India
- Open to SDE-2 / Senior Frontend and React Native roles
- Available for Bengaluru, India-wide, and suitable remote opportunities

The availability statement should be easy to update from one content file. Do not hard-code it across components.

#### Primary actions

- `View selected work` -> `#selected-work`
- `Download résumé` -> `/resume.pdf`

#### Secondary text link

- `nishchay.bhat@gmail.com`

#### Alternative headline for a more technical tone

> Frontend engineering across interface, native platform, and real-time state.

Use the recommended headline for approachability. Use the alternative only if the rest of the site becomes highly technical.

### 4.2 Proof strip

Use four proof cells. Each cell contains a number, a short meaning, and the context that prevents misinterpretation.

| Value | Label | Context |
| --- | --- | --- |
| `150K+` | daily active users | Real-time mobile products at Jumbo |
| `900K/mo` | payment events | In-house payment infrastructure |
| `99.3%` | crash-free rate | Field-operations application |
| `35% / 42%` | JS bundle / app size reduction | Client performance work |

Optional fifth cell for wider layouts:

| Value | Label | Context |
| --- | --- | --- |
| `28%` | retention contribution | Notification optimization |

Do not animate numbers from zero. The numbers are evidence, not entertainment.

### 4.3 Product-surface proof

#### Heading

`One product, multiple engineering surfaces`

#### Intro copy

> My center is frontend and mobile engineering, but the features I have owned rarely stop at the interface. My GitHub and professional work show contribution across the application, native Android platform behavior, supporting services, and web surfaces.

#### Four-part proof matrix

| Surface | Public-facing proof | What it should communicate |
| --- | --- | --- |
| Application | React Native product ownership, real-time games, operations software, HiRobin app | Complex client state and end-to-end feature delivery |
| Native Android | Dialer and telephony modules, lifecycle services, overlays, Quick Settings/accessibility entry points | Ability to work below the React Native layer |
| Backend and real-time services | Payments, WebSockets, VoIP foundations, automation and supporting APIs | Ability to carry a client feature across service boundaries |
| Web | Product sites, internal analytics, operational interfaces, current offline-first console | React/Next.js range beyond mobile |

#### Evidence behavior

- Link `Application` and `Native Android` to relevant case-study anchors.
- Link public package evidence directly to GitHub.
- Link private professional work to the GitHub profile or case study, never to a private repository route.
- Add a quiet label: `Public packages + private professional contributions`.
- Use tooltips or expandable detail only as enhancement; the four categories and their meaning must be visible without interaction.

#### GitHub achievement strip

On the About or Open Source page, show selected GitHub achievement badges only if they are publicly visible and current. Each badge must have a human-readable name and link to the public profile. Limit to four. Place them after project proof with this caption:

> GitHub activity and achievements are supporting signals. The case studies above contain the actual engineering evidence.

Do not use contribution streaks, animated counters, rank cards, or generated profile-stat images.

### 4.4 Selected work

Show three large records, not a uniform six-card grid.

#### Project 01 - HiRobin

**Status:** `PRODUCTION / CURRENT`

**Title:** HiRobin - AI calling assistant

**One-line statement:**

> Owning a React Native product across mobile architecture, Android telephony, call forwarding, payments, real-time chat, and VoIP foundations.

**Problem frame:**

> AI-assisted calling crosses mobile UI, Android platform behavior, telecom workflows, payments, and live server events. The client has to make those systems understandable and reliable to the user.

**Visible evidence tags:**

- React Native
- TypeScript
- Android native modules
- WebSockets
- Payments
- Telephony

**Outcome text:**

> Built core product flows end to end and translated emerging product requirements into client and service boundaries.

**CTA:** `Read the case study`

**Confidentiality rule:** Do not publish proprietary architecture, provider credentials, internal screenshots, private volumes, or unreleased product strategy. Use sanitized diagrams and public product surfaces.

#### Project 02 - Offline-First Operations Console

**Status:** `IN PROGRESS / PORTFOLIO BUILD`

**Title:** Operations software for unreliable networks

**One-line statement:**

> A React and TypeScript field-operations console designed around map-heavy workflows, offline writes, reconnect synchronization, and constrained devices.

**Problem frame:**

> Operational software cannot assume a stable connection or a clean linear workflow. The interface has to preserve user intent, expose synchronization state, and remain useful under degraded conditions.

**Visible evidence tags:**

- React
- TypeScript
- Leaflet
- Zustand
- TanStack Query
- IndexedDB
- Recharts
- WebSockets

**Outcome text before completion:**

> The case study documents the state model, offline queue, reconnection rules, geospatial interface, and performance budget as the implementation develops.

**CTA:** `View architecture and progress`

Never label this project “shipped” until it is deployed, usable, and documented with evidence.

#### Project 03 - Latch

**Status:** `OPEN SOURCE / PUBLISHED`

**Title:** Safer package execution and installation

**One-line statement:**

> A local-first audit pipeline that inspects npm packages before `npx` execution or installation and makes the approval decision explicit.

**Problem frame:**

> Package runners combine retrieval and execution into one convenient step. Latch changes the order: resolve, verify, inspect, score, evaluate policy, then run only after approval.

**Visible evidence tags:**

- TypeScript
- npm registry
- Integrity verification
- Static analysis
- Policy engine
- CLI and CI

**Proof links:**

- [latch-core on npm](https://www.npmjs.com/package/latch-core)
- [latchx on npm](https://www.npmjs.com/package/@meredian-labs/latchx)
- [latchpm on npm](https://www.npmjs.com/package/@meredian-labs/latchpm)
- [Source organization](https://github.com/meredian-labs)

**Current public versions reviewed:**

- `latch-core` 0.1.3
- `@meredian-labs/latchx` 0.1.3
- `@meredian-labs/latchpm` 0.1.2

**Honest limitation text:**

> The current releases provide local static risk signals and policy enforcement. They are not malware verdicts, a sandbox, or a complete package-manager replacement.

**CTA:** `See the audit model`

### 4.5 Open-source systems

This section should present two React Native packages as a paired story: controlling application state at the moments users notice most.

#### Intro copy

> I tend to turn repeated client-platform problems into explicit, reusable tools. These packages focus on startup sequencing and application lifecycle - two areas where hidden state quickly becomes user-visible failure.

#### `rn-bootloader`

**Version reviewed:** npm 0.1.1.

**Copy:**

> A phase-based lifecycle boot manager for React Native. It organizes startup work into explicit pre-UI and post-UI phases, supports blocking and non-blocking tasks, and adds retry, timeout, readiness, and testable execution behavior.

**Links:**

- [GitHub](https://github.com/Nishchay1571999/rn-bootloader)
- [npm](https://www.npmjs.com/package/rn-bootloader)

#### `react-native-appcycle`

**Version reviewed:** npm 0.2.1.

**Copy:**

> A React Native lifecycle and Android integration library for foreground/background awareness, a React-powered global overlay, foreground runtime behavior, Quick Settings and accessibility triggers, and optional assistant invocation.

**Links:**

- [GitHub](https://github.com/Nishchay1571999/react-native-appcycle)
- [npm](https://www.npmjs.com/package/react-native-appcycle)

**Technical note:** The repository uses React Native's new-architecture code generation and native Kotlin/Objective-C surfaces. Keep the public copy focused on the user problem; expose platform detail in the expanded technical section.

### 4.6 Experience snapshot

Use a compact chronological list. Do not reproduce every bullet from the résumé.

#### HiRobin / Taskgeine Pvt Ltd

`SDE 2 / Founding Engineer · Jan 2026 - Present · Bengaluru`

> Core React Native ownership for an AI phone assistant, including Android telephony integrations, call forwarding, subscriptions, payments, real-time chat, WebSockets, and VoIP foundations.

#### Buzzworthy / Humble Bee

`SDE 2 / Senior Frontend Engineer · Sep 2025 - Jan 2026 · Bengaluru`

> Financial-product workflows, beehive operations modules, product-discovery tooling, and maintenance of IBL Bank's volunteering portal.

Confirm the correct public company and title before launch.

#### Jumbo Gaming

`SDE 1 / Founding Engineer · Dec 2024 - Sep 2025 · Delhi`

> Real-time React Native games for 150K+ DAU, in-house payment infrastructure processing about 900K transactions monthly, retention work, and internal analytics built with Next.js, ClickHouse, and PostHog.

Confirm the preferred public title before launch.

#### Royal Brothers

`Software Engineer 1 / React Native Developer · Sep 2022 - Dec 2024 · Bengaluru`

> Owned field-operations software across React Native and React, improving performance, reliability, application size, and operational workflows.

#### Value Floatr Pvt Ltd

`React Native Android Developer Intern · Jun 2022 - Aug 2022`

> Contributed to production React Native Android development, debugging, and release work.

#### Supporting freelance work

`Waters India · 2024`

> Built and maintained a Next.js website with search-engine optimization work.

Do not give this engagement the same prominence as longer production roles.

### 4.7 How I work

Use three principles with evidence.

#### Make state visible

> I prefer explicit states, transitions, and ownership over scattered conditional behavior. This shows up in boot phases, background lifecycle, synchronization status, payment state, and policy results.

#### Design around failure modes

> Retry, timeout, network loss, lifecycle restrictions, integrity mismatch, and degraded devices are design inputs, not cleanup work after the happy path.

#### Measure the client

> Performance work should end in observable change: smaller bundles, lower application size, better crash-free sessions, responsive interactions, and understandable production behavior.

### 4.8 Current direction

#### Heading

`Currently building deeper frontend systems`

#### Copy

> I am extending my production mobile experience into complex web interfaces: offline-first workflows, geospatial visualization, document intelligence, and operational dashboards. The goal is not to collect frameworks. It is to get better at building interfaces that explain and control complex systems.

Do not list more than three current areas. Update or remove this section if it becomes stale.

### 4.9 Contact close

#### Heading

> Building a product with difficult client state or native constraints?

#### Copy

> I am interested in SDE-2 and senior frontend or React Native roles where I can own meaningful product systems and continue growing across the frontend boundary.

#### Actions

- `Email Nishchay` -> `mailto:nishchay.bhat@gmail.com`
- `View LinkedIn` -> <https://www.linkedin.com/in/nishchay-bhatt/>
- `Download résumé` -> `/resume.pdf`

## 5. Case-study content framework

Every case study must use the same reasoning structure without looking templated.

### Required front matter

```yaml
title: "Project name"
slug: "project-slug"
summary: "One sentence"
status: "production | shipped | open-source | in-progress | research"
role: "Exact role"
period: "YYYY - YYYY"
team: "Team context if publishable"
stack:
  - "React Native"
  - "TypeScript"
featured: true
confidentiality: "public | sanitized | private"
links:
  source: ""
  live: ""
  package: ""
```

### Required narrative sections

#### 1. Context

Explain the product, the user, and why the work mattered. Maximum 150 words.

#### 2. The difficult part

Name the actual constraint. Examples: platform limitation, real-time ordering, network unreliability, initialization cost, safety decision, or a cross-team boundary.

#### 3. My responsibility

Separate personal ownership from team output. Use verbs such as built, designed, implemented, led, maintained, proposed, or contributed.

#### 4. System model

Show a small flow or state diagram. Limit it to the part Nishchay can explain fully.

#### 5. Decisions and tradeoffs

Use 2-4 decision records:

| Decision | Why | Tradeoff | Result |
| --- | --- | --- | --- |
| Example | Constraint addressed | Cost accepted | Evidence |

#### 6. Failure modes

List the relevant failures and what the system does. This section is a differentiator and should be concise.

#### 7. Outcome

Use measurable evidence where available. If measurement is unavailable, state what was shipped and how success was validated.

#### 8. What I would change

Include one honest retrospective. Seniority is visible in revised judgment.

#### 9. Interview prompts

End with 2-3 questions a technical interviewer could ask, such as:

- How did you separate local workflow state from server state?
- What happens when WebSocket events arrive out of order?
- Why was a native module necessary?

These prompts turn the portfolio into an interview aid.

## 6. Detailed case-study briefs

### 6.1 HiRobin case study brief

#### Public angle

“Building the client side of an AI calling product across React Native, Android telephony, real-time communication, and payments.”

#### Sections to write

1. Product context using only public HiRobin positioning.
2. Call-forwarding onboarding as a multi-state user workflow.
3. Android dialer/native-module boundary.
4. WebSocket event handling for chat and VoIP-related client state.
5. Subscription/payment flow and failure recovery.
6. Product decisions for call segmentation and analysis.
7. Sanitized architecture diagram.
8. Retrospective on what a stable telephony client requires.

#### Assets to request or create

- Three sanitized mobile screenshots.
- One call-forwarding state flow.
- One client/native/service boundary diagram.
- One payment state-machine excerpt.
- One timeline of a live event reaching the UI.

#### Claims to avoid

- Unverified user counts or call volumes.
- Claims of owning the entire product or backend.
- Specific telecom/provider implementation details that are confidential.
- Saying the VoIP platform is complete if it remains foundational work.

### 6.2 Operations console case study brief

#### Public angle

“A senior-level frontend project about making operational work resilient to unreliable networks.”

#### Core story

The project should prove web-depth through state separation, map interaction, offline persistence, synchronization, data visualization, performance budgets, testing, and accessibility. Styling is secondary to the operating model.

#### Sections to write

1. Operator and dispatcher needs.
2. Domain model and workflow states.
3. Map and list coordination.
4. Server state versus local workflow state.
5. IndexedDB offline queue.
6. Conflict and reconnect policy.
7. WebSocket invalidation and update flow.
8. Charting and operational summaries.
9. Performance testing on constrained devices and bandwidth.
10. Accessibility and keyboard workflows.

#### Proof required before featuring as complete

- Deployed demo.
- Seeded realistic data.
- Offline-to-online demonstration.
- Measured interaction or rendering budget.
- Automated tests for synchronization logic.
- Responsive desktop/tablet layout.

### 6.3 Latch case study brief

#### Public angle

“Changing package execution from fetch-and-run to inspect-decide-run.”

#### System sequence

1. Parse package specification.
2. Resolve registry metadata and exact version.
3. Download package tarball.
4. Verify integrity when supplied.
5. Extract and inspect package contents.
6. Detect lifecycle scripts, binaries, dependency size, suspicious patterns, and previous-version changes.
7. Calculate local risk signals.
8. Evaluate policy.
9. Ask for approval or produce deterministic CI output.
10. Delegate execution or installation only when allowed.

#### Product split

- `latch-core`: shared registry, scanner, integrity, policy, risk, cache, and report engine.
- `latchx`: safer `npx`-style execution workflow.
- `latchpm`: safer npm install workflow.

#### Seniority signals

- Clear separation between core logic and CLI UX.
- Exact inspected and installed version alignment.
- Stable exit-code semantics for CI.
- Cache keyed by package, version, registry, and integrity.
- Honest statement that static signals are not a malware verdict.
- Explicit limitations and roadmap.

### 6.4 React Native packages brief

Present `rn-bootloader` and `react-native-appcycle` together on the homepage, with optional individual pages later.

#### Shared thesis

> Client reliability improves when application lifecycle becomes explicit rather than distributed across incidental effects and platform callbacks.

#### `rn-bootloader` story

- Problem: startup work delays useful UI and becomes scattered.
- Model: named tasks grouped into phases.
- Controls: priority, blocking/non-blocking behavior, retry, timeout, readiness gate.
- Desired proof: before/after startup trace, example configuration, task result view, tests.

#### `react-native-appcycle` story

- Problem: foreground/background transitions and Android entry points are difficult to compose with a React tree.
- Model: lifecycle events plus a registered overlay and app API.
- Native surfaces: foreground runtime service, Quick Settings, accessibility, assistant-related invocation, overlay-only mode.
- Desired proof: platform diagram, demo recording, compatibility matrix, setup guide.

## 7. Open-source page

### Intro

> These are small, focused tools built around problems I encountered while shipping mobile products and developer workflows. Each is published, source-visible, and explicit about its current limitations.

### Package table

| Package | Purpose | Current reviewed version | Source |
| --- | --- | ---: | --- |
| `rn-bootloader` | Phase-based React Native startup management | 0.1.1 | [GitHub](https://github.com/Nishchay1571999/rn-bootloader) / [npm](https://www.npmjs.com/package/rn-bootloader) |
| `react-native-appcycle` | Lifecycle awareness and Android-triggered React overlay | 0.2.1 | [GitHub](https://github.com/Nishchay1571999/react-native-appcycle) / [npm](https://www.npmjs.com/package/react-native-appcycle) |
| `latch-core` | Audit, integrity, scanner, policy, risk, cache, and report engine | 0.1.3 | [GitHub](https://github.com/meredian-labs/latch-core) / [npm](https://www.npmjs.com/package/latch-core) |
| `@meredian-labs/latchx` | Audit-before-execution CLI | 0.1.3 | [GitHub](https://github.com/meredian-labs/latchx) / [npm](https://www.npmjs.com/package/@meredian-labs/latchx) |
| `@meredian-labs/latchpm` | Audit-before-install npm wrapper | 0.1.2 | [GitHub](https://github.com/meredian-labs/latchpm) / [npm](https://www.npmjs.com/package/@meredian-labs/latchpm) |

### Professional GitHub evidence

After the public package table, add a short proof block:

> My professional repository history includes work across product applications, native Android/platform behavior, backend and automation services, dashboards, and websites. Much of that source is private, so the portfolio uses sanitized case studies and the public GitHub contribution record rather than exposing internal repositories.

Include:

- A link to [Nishchay's GitHub profile](https://github.com/Nishchay1571999).
- Up to four public achievement badges with text alternatives.
- A four-surface contribution summary: App, Native Android, Backend/Services, Web.
- A privacy label for private-company evidence.

Do not list private repository names, organization-private metadata, commit messages, or raw screenshots of private repository pages.

### Do not display by default

- Download counters until they are meaningful and sourced dynamically.
- Star counts.
- “Trending” or “popular” labels.
- Security claims beyond the documented audit behavior.
- Version numbers copied into multiple components. Store them in one data file.

## 8. About page draft

### Heading

> I started in React Native. The work kept pulling me deeper into the systems around it.

### Draft body

> I am a frontend and mobile engineer based in Bengaluru. Over the last four years, I have built consumer and operational products in React and React Native, including real-time games, field-operations tools, payment workflows, analytics interfaces, and an AI calling assistant.
>
> The part of engineering I enjoy most is where the interface stops being isolated. A screen depends on native Android behavior, background lifecycle, a WebSocket event, an unreliable connection, a payment state, or a piece of work that must not block the first render. Those boundaries are where product quality is usually won or lost.
>
> That interest also shapes my open-source work. I built a lifecycle boot manager for React Native, a package for foreground/background and Android overlay behavior, and a set of tools that inspect npm packages before execution or installation.
>
> I am now looking for SDE-2 or senior frontend/mobile roles where I can own meaningful product systems, work with strong engineers, and deepen my web, platform, and systems experience.

### Working principles

- Model states before adding conditionals.
- Treat failure behavior as part of the feature.
- Measure performance changes.
- Prefer small explicit abstractions over magical frameworks.
- Be precise about what was shipped, what was learned, and what is still unfinished.

### Personal material to omit

The portfolio is not the place for sensitive personal history, salary targets, unrelated startup concepts, or a complete learning diary. Personality should come through engineering judgment and writing style.

## 9. Contact page

### Heading

`Let's talk about the product problem, not just the stack.`

### Copy

> I am open to SDE-2 and senior frontend or React Native opportunities. The most relevant roles involve complex client state, performance, native-platform behavior, real-time products, or operational interfaces.

### Contact methods

- Email: `nishchay.bhat@gmail.com`
- LinkedIn: <https://www.linkedin.com/in/nishchay-bhatt/>
- GitHub: <https://github.com/Nishchay1571999>

### Optional form

Avoid a backend at launch. Use a mailto action or a small managed form only if email spam becomes a problem. If a form is added, fields should be: name, work email, company, role/context, and message. No phone field.

## 10. Footer content

Left:

`Nishchay Bhatt · Frontend & Mobile Engineer · Bengaluru`

Right:

- Email
- GitHub
- LinkedIn
- Résumé

Small note:

`Built with Next.js and TypeScript. Designed as a record of decisions, not a list of technologies.`

Do not include a live visitor counter, local time widget, Spotify status, or “made with caffeine.”

## 11. Writing system

### Project-card formula

`Problem` + `boundary or constraint` + `action` + `evidence`.

Weak:

> Built an AI dialer using React Native and WebSockets.

Strong:

> Built core flows for an AI calling assistant where React Native state, Android telephony, call forwarding, payments, and live server events had to behave as one product.

### Bullet formula

`Strong verb` + `owned system` + `constraint or scale` + `measured outcome`.

### Status language

Use only these labels:

- `PRODUCTION`
- `SHIPPED`
- `OPEN SOURCE`
- `IN PROGRESS`
- `PROTOTYPE`
- `RESEARCH`
- `ARCHIVED`

Never use “coming soon” indefinitely.

### Technical-depth levels

Each project provides three reading levels:

1. **Scan:** title, one sentence, status, outcome.
2. **Read:** problem, responsibility, major decisions.
3. **Inspect:** architecture, failure modes, implementation details, links.

Do not force every recruiter to read implementation detail to understand relevance.

## 12. Search and social metadata

### Home title

`Nishchay Bhatt - Frontend & React Native Engineer`

### Home description

`Frontend and mobile engineer in Bengaluru building production React and React Native systems across native Android, real-time products, payments, telephony, performance, and operational tools.`

### Open Graph headline

`Frontend engineering across interface, native platform, and real-time state.`

### Structured data

Use `Person` schema with:

- name
- jobTitle
- address locality and country only
- sameAs links for GitHub and LinkedIn
- email only if intentional
- knowsAbout as a short curated list

Do not publish a street address or phone number in structured data.

## 13. Content data model

Keep content separate from components. Recommended structure:

```text
content/
  profile.ts
  experience.ts
  metrics.ts
  packages.ts
  work/
    hirobin.mdx
    operations-console.mdx
    latch.mdx
  notes/
public/
  resume.pdf
  work/
    hirobin/
    operations-console/
    latch/
```

Recommended TypeScript shape:

```ts
type WorkStatus =
  | 'production'
  | 'shipped'
  | 'open-source'
  | 'in-progress'
  | 'prototype'
  | 'research'
  | 'archived'

type WorkRecord = {
  slug: string
  order: number
  title: string
  shortTitle: string
  summary: string
  status: WorkStatus
  role: string
  period: string
  stack: string[]
  metrics: string[]
  links: Array<{ label: string; href: string }>
  featured: boolean
  confidentiality: 'public' | 'sanitized' | 'private'
}
```

All repeated facts - contact details, role availability, package versions, metrics, and external URLs - must live in structured data instead of page JSX.

## 14. Asset plan

### Required launch assets

- Updated one-page résumé PDF.
- One professional portrait or a deliberate no-portrait layout.
- HiRobin screenshots approved for public use.
- Operations console screenshots at desktop and tablet sizes.
- Latch terminal output captured as accessible HTML or a styled code sample, not a raster image only.
- Two architecture diagrams built as SVG or HTML/CSS.
- Open Graph image.
- Project favicon and simple NB wordmark.

### Asset rules

- Every screenshot needs a caption describing the workflow or state.
- Crop screenshots around the decision being explained.
- Blur or replace sensitive production data.
- Provide dark and light diagram variants only if the site supports both themes.
- Use real product imagery before abstract illustration.
- Do not use stock photos of laptops, offices, code, or servers.

## 15. Launch content checklist

### Factual integrity

- [ ] Company names and titles are reconciled.
- [ ] Email and GitHub username are consistent.
- [ ] All metrics can be explained and attributed.
- [ ] Project status labels are accurate.
- [ ] Confidential material is removed or sanitized.
- [ ] Package versions come from a single data source.

### Recruiter usability

- [ ] Role target is visible without scrolling on desktop and mobile.
- [ ] Experience level and location are explicit.
- [ ] Résumé is one click away.
- [ ] Contact is one click away.
- [ ] Three strongest work examples appear before experiments.
- [ ] Product-surface proof shows App, Native Android, Backend/Services, and Web without weakening the frontend/mobile positioning.
- [ ] Each selected project has a 20-second summary.

### Technical credibility

- [ ] Each case study explains one difficult constraint.
- [ ] Personal ownership is distinguished from team work.
- [ ] At least one tradeoff is explicit.
- [ ] At least one failure mode is explicit.
- [ ] At least one outcome or validation method is shown.
- [ ] Public source links open to the exact repository or package.

## 16. Maintenance cadence

### Monthly

- Update availability.
- Update current role and current project status.
- Confirm external links.
- Remove stale “currently exploring” items.

### On every package release

- Update the structured package version.
- Update limitations if behavior changed.
- Add a release note only when it demonstrates a meaningful engineering decision.

### On every role change

- Update hero, experience, résumé, metadata, and structured data together.
- Preserve previous case studies; do not rewrite history to match the new role.

### Quarterly

- Review whether each homepage block still strengthens the target hiring narrative.
- Remove weak projects before adding new ones.
- Re-test résumé download, contact paths, and all external links.

## 17. Source map

Primary public sources used for open-source copy:

- <https://github.com/Nishchay1571999/rn-bootloader>
- <https://www.npmjs.com/package/rn-bootloader>
- <https://github.com/Nishchay1571999/react-native-appcycle>
- <https://www.npmjs.com/package/react-native-appcycle>
- <https://github.com/meredian-labs/latch-core>
- <https://www.npmjs.com/package/latch-core>
- <https://github.com/meredian-labs/latchx>
- <https://www.npmjs.com/package/@meredian-labs/latchx>
- <https://github.com/meredian-labs/latchpm>
- <https://www.npmjs.com/package/@meredian-labs/latchpm>

Employment, skills, metrics, and education facts are based on the current resume and LinkedIn export supplied for this portfolio project. The resume should remain the final authority after the naming conflicts listed in the identity document are resolved.
