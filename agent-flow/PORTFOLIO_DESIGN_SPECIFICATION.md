# Nishchay Bhatt - Portfolio Design Specification

**Design direction:** A restrained engineering publication organized like a system trace.

**Working concept name:** `System Trace`

**Primary outcome:** A recruiter should understand Nishchay's role, production credibility, and differentiating technical depth quickly. An engineer should be able to continue into architectural detail without entering a different visual world.

**Implementation target:** Next.js, TypeScript, CSS variables, Tailwind CSS or CSS Modules, MDX for case studies, static deployment.

---

## 1. Design thesis

The portfolio should look like the work of an engineer who makes complex application state understandable. Its uniqueness should come from structure, sequencing, typography, and technical evidence - not from visual effects.

The visual language is derived from recurring work patterns:

- Boot phases become numbered section records.
- Lifecycle transitions become subtle connecting rules.
- Package audit states become status labels.
- Real-time systems become event markers and timestamps.
- Operational software becomes dense but legible information hierarchy.
- Failure-aware engineering becomes explicit constraint and outcome blocks.

The result is an editorial site with the precision of an engineering control surface, without imitating a terminal or admin dashboard.

## 2. Design principles

### 2.1 Clarity before personality

The visual identity must help visitors classify Nishchay and inspect evidence. Any unusual interaction that delays this is wrong.

### 2.2 Structure is the signature

Use consistent numbering, rules, alignment, status, and metadata. Do not depend on illustrations to create personality.

### 2.3 Density in layers

The first view is calm. Technical depth appears through disclosure, project pages, captions, and diagrams. Avoid showing every detail simultaneously.

### 2.4 Motion explains change

Motion may show navigation state, expansion, sequence, or focus. It must not decorate static content.

### 2.5 Real evidence is visual content

Screenshots, architecture, state flows, measured outcomes, code excerpts, and decision tables are the imagery. Do not add abstract 3D shapes or stock photography.

### 2.6 Accessible by default

Contrast, keyboard operation, focus states, readable type, reduced motion, and semantic structure are foundation requirements, not a final audit phase.

## 3. Visual character

### Keywords

- Precise
- Quiet
- Technical
- Editorial
- Grounded
- Evidence-led
- Slightly experimental
- Human, not sterile

### The desired first impression

“This engineer is serious about systems and product quality, but the site is easy to read.”

### The desired second impression

“There is more technical depth here than the simple surface initially suggests.”

### Explicitly avoid

- Black-and-neon cyberpunk.
- Glassmorphism.
- Large blurred gradients.
- Floating 3D devices.
- Browser-window mockups around every screenshot.
- Generic bento-card grids.
- Skill-logo clouds.
- Animated terminal typing.
- GitHub contribution graphs.
- Parallax scrolling.
- Custom cursor replacement.
- Hidden navigation.
- Scroll-jacking.
- More than one accent color competing for attention.

## 4. Page shell

### Desktop shell

Use a 12-column centered grid within a maximum content width of `1440px`. The default content container is `1280px`; project reading columns are narrower.

- Outer page padding: `clamp(24px, 4vw, 64px)`.
- Primary grid gap: `24px` at desktop.
- Navigation height: `72px`.
- Main content begins 48-80px below navigation depending on page.
- Long-form reading width: `720px`.
- Case-study media width: up to `1120px`.
- Full-bleed ruled bands may extend to `1440px` but content remains aligned to the grid.

### Tablet shell

- 8 columns.
- Page padding: `32px`.
- Gap: `20px`.
- Navigation remains horizontal if labels fit; otherwise collapse at `760px`.

### Mobile shell

- 4 columns.
- Page padding: `20px` below `480px`, `24px` from `480px` to tablet.
- Gap: `16px`.
- Minimum usable viewport: `320px`.
- No horizontal carousels for core content.

## 5. Grid and alignment

### Grid behavior

The site should reveal its grid through alignment rather than visible background lines.

- Hero text spans 7-8 columns.
- Hero metadata occupies 3-4 columns and aligns to the headline baseline region.
- Selected projects alternate between 7/5 and 5/7 visual-text relationships, but titles always begin on stable columns.
- Proof metrics sit in equal-width ruled cells.
- Case-study body uses a 7-column narrative with a 3-column sticky metadata rail where space allows.

### Alignment rules

- Major headings align to the same left boundary as project numbers.
- Status labels align to a metadata column, not arbitrarily near titles.
- Captions align to media edges.
- Paragraphs do not center-align.
- Center alignment is reserved for the smallest mark or a deliberate empty-state message.

## 6. Color system

### Concept

A warm paper surface keeps the portfolio editorial and human. Graphite provides strong readable text. Cobalt is the signal color for navigation, links, focus, and active states. Green and amber are semantic only.

### Light theme palette

| Token | Value | Use |
| --- | --- | --- |
| `--canvas` | `#F3F0E8` | Page background |
| `--surface` | `#FBFAF6` | Raised reading surface, screenshots frame |
| `--surface-subtle` | `#ECE8DE` | Code blocks, metadata bands |
| `--ink` | `#12151A` | Primary text |
| `--ink-soft` | `#3F4650` | Secondary text |
| `--ink-muted` | `#6C737D` | Metadata and captions |
| `--line` | `#C9C4B8` | Default borders and rules |
| `--line-strong` | `#8C8B84` | Emphasized dividers |
| `--signal` | `#1E5EFF` | Links, active navigation, focus |
| `--signal-hover` | `#164BD6` | Hover/pressed accent |
| `--signal-soft` | `#DDE7FF` | Accent background |
| `--positive` | `#087A5B` | Production/healthy state |
| `--positive-soft` | `#DDEFE8` | Positive state surface |
| `--attention` | `#A95F00` | In-progress/constraint state |
| `--attention-soft` | `#F5E6CE` | Attention surface |
| `--danger` | `#B42318` | Error or destructive meaning only |
| `--focus` | `#004CFF` | Focus ring |

### Dark theme palette

Dark mode is optional at launch. Build tokens to support it, but do not delay launch for theme switching.

| Token | Value |
| --- | --- |
| `--canvas` | `#0E1013` |
| `--surface` | `#15181D` |
| `--surface-subtle` | `#1D2127` |
| `--ink` | `#F3F1EA` |
| `--ink-soft` | `#C9CDD3` |
| `--ink-muted` | `#9299A3` |
| `--line` | `#343A43` |
| `--line-strong` | `#59616C` |
| `--signal` | `#78A0FF` |
| `--signal-hover` | `#A5BDFF` |
| `--signal-soft` | `#1D315F` |
| `--positive` | `#63CBA8` |
| `--positive-soft` | `#163B31` |
| `--attention` | `#E6A85B` |
| `--attention-soft` | `#462E12` |
| `--danger` | `#FF8278` |
| `--focus` | `#8EB0FF` |

### Color rules

- Cobalt marks interactive or active state, never entire decorative backgrounds.
- Project status uses color plus a text label and icon/shape.
- Body text uses `--ink`; secondary paragraphs use `--ink-soft`, never muted gray.
- `--ink-muted` is limited to text at least 13px and must pass contrast on its actual background.
- Large dark sections are allowed only for code, terminal output, or a deliberate footer.
- Avoid gradients at launch. If added later, use an extremely subtle tonal wash within one hue.

## 7. CSS token sheet

Use semantic custom properties. Tailwind utilities may consume these variables, but component files must not contain repeated raw hex values.

```css
:root {
  color-scheme: light;

  --canvas: #f3f0e8;
  --surface: #fbfaf6;
  --surface-subtle: #ece8de;
  --ink: #12151a;
  --ink-soft: #3f4650;
  --ink-muted: #6c737d;
  --line: #c9c4b8;
  --line-strong: #8c8b84;
  --signal: #1e5eff;
  --signal-hover: #164bd6;
  --signal-soft: #dde7ff;
  --positive: #087a5b;
  --positive-soft: #ddefe8;
  --attention: #a95f00;
  --attention-soft: #f5e6ce;
  --danger: #b42318;
  --focus: #004cff;

  --font-display: "Inter Tight", "Inter", system-ui, sans-serif;
  --font-body: "IBM Plex Sans", "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  --step--1: clamp(0.78rem, 0.75rem + 0.1vw, 0.84rem);
  --step-0: clamp(1rem, 0.96rem + 0.18vw, 1.125rem);
  --step-1: clamp(1.25rem, 1.14rem + 0.4vw, 1.5rem);
  --step-2: clamp(1.56rem, 1.33rem + 0.8vw, 2rem);
  --step-3: clamp(1.95rem, 1.55rem + 1.35vw, 2.75rem);
  --step-4: clamp(2.44rem, 1.78rem + 2.2vw, 3.75rem);
  --step-5: clamp(3rem, 2rem + 3.5vw, 5.25rem);

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --space-9: 6rem;
  --space-10: 8rem;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 999px;

  --shadow-soft: 0 12px 36px rgb(18 21 26 / 0.08);
  --shadow-focus: 0 0 0 3px color-mix(in srgb, var(--focus) 35%, transparent);

  --content-max: 80rem;
  --reading-max: 45rem;
  --media-max: 70rem;
  --page-gutter: clamp(1.25rem, 4vw, 4rem);

  --duration-fast: 120ms;
  --duration-base: 200ms;
  --duration-slow: 320ms;
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
}

@media (prefers-color-scheme: dark) {
  :root[data-theme="system"] {
    color-scheme: dark;
    --canvas: #0e1013;
    --surface: #15181d;
    --surface-subtle: #1d2127;
    --ink: #f3f1ea;
    --ink-soft: #c9cdd3;
    --ink-muted: #9299a3;
    --line: #343a43;
    --line-strong: #59616c;
    --signal: #78a0ff;
    --signal-hover: #a5bdff;
    --signal-soft: #1d315f;
    --positive: #63cba8;
    --positive-soft: #163b31;
    --attention: #e6a85b;
    --attention-soft: #462e12;
    --danger: #ff8278;
    --focus: #8eb0ff;
  }
}
```

## 8. Typography

### Font roles

- **Display:** Inter Tight variable. Use for hero and major project titles. Its compressed proportions create editorial confidence without looking decorative.
- **Body:** IBM Plex Sans variable. Use for paragraphs, navigation, buttons, and tables. It reads well at technical content densities.
- **Mono:** IBM Plex Mono. Use only for project numbers, status, stack metadata, dates, file paths, code, and diagram labels.

Self-host WOFF2 subsets when licensing permits. Preload only the required regular display/body files. Prefer variable fonts and limit weights.

### Type scale

| Role | Token | Weight | Line height | Notes |
| --- | --- | ---: | ---: | --- |
| Hero | `--step-5` | 560-620 | 0.98 | Max 10-12 words per line |
| Page title | `--step-4` | 600 | 1.02 | Tight tracking |
| Project title | `--step-3` | 600 | 1.08 | No all caps |
| Section title | `--step-2` | 600 | 1.15 | Short noun phrase |
| Lead | `--step-1` | 400 | 1.45 | Max width 60ch |
| Body | `--step-0` | 400 | 1.65 | 55-75ch |
| Small | `--step--1` | 450 | 1.45 | Metadata only |
| Mono label | `0.75rem` | 500 | 1.2 | Uppercase, tracking `0.08em` |

### Typography rules

- Body text minimum 16px.
- Never use font weight below 400 on the warm background.
- Do not use monospace for paragraphs.
- All-caps is limited to labels under 30 characters.
- Use sentence case for navigation, buttons, and headings.
- Use real tabular numerals for metrics where supported.
- Prevent widows in major titles with balanced wrapping where browser support allows.

## 9. Spacing and rhythm

### Section rhythm

- Hero top/bottom: 80-144px depending on viewport.
- Major homepage sections: 96-128px desktop, 72-96px tablet, 64-80px mobile.
- Project record internal padding: 40-64px desktop, 28-36px mobile.
- Heading to lead: 20-28px.
- Paragraph to paragraph: 16-20px.
- Metadata item gaps: 8-12px.

### Rule

Prefer fewer, larger spacing decisions. Avoid arbitrary 18px/22px/26px values unless optical correction is necessary.

## 10. Shape, border, and elevation

### Shape

- Default corner radius: 4px or 8px.
- Screenshot/media containers: up to 12px.
- Status chips: pill only because they represent compact categorical state.
- Do not place every text group in a rounded rectangle.

### Border

- Default border: `1px solid var(--line)`.
- Strong section rule: `1px solid var(--line-strong)`.
- Active project or link can use a 2px cobalt leading rule.
- Dashed borders are reserved for provisional, in-progress, or queued states.

### Elevation

Most surfaces remain flat. Use `--shadow-soft` only for:

- A lifted navigation panel on mobile.
- Screenshots intentionally separated from the page.
- A dialog or lightbox.

Cards should be distinguished by rules and background tone before shadows.

## 11. Signature visual elements

### 11.1 System index

Major blocks begin with an index such as `01 / PRODUCTION`. This is not a decorative count; it shows order and status.

Specification:

- IBM Plex Mono, 12px.
- Uppercase.
- `--ink-muted` for index; semantic color for status dot/text.
- Place above the title on mobile and in the metadata column on desktop.

### 11.2 Trace rule

A thin rule visually connects stages inside a project preview or case study.

- 1px `--line`.
- Active node is 6px cobalt circle with 2px canvas outline.
- No animated traveling dots.
- On mobile, use a vertical trace only when it improves sequence comprehension.

### 11.3 Decision record

A compact block with four labels: `CONTEXT`, `DECISION`, `TRADEOFF`, `RESULT`.

- Do not style as four colored cards.
- Use a single ruled grid.
- Stack cells below 640px.
- Allow one highlighted cell only when the decision is the main teaching point.

### 11.4 State label

Status label combines a small geometric marker and text.

- Production/Shipped/Open Source: filled circle using `--positive`.
- In Progress/Prototype: half-filled or outlined circle using `--attention`.
- Research: neutral diamond using `--ink-muted`.
- Archived: horizontal line marker.

Every marker includes visible text and an accessible name.

### 11.5 Evidence margin

On wide case-study pages, the right rail may display role, date, stack, scale, and source links. It becomes inline content on smaller screens.

### 11.6 Product-surface proof matrix

Use a single ruled four-column block labeled `APPLICATION`, `NATIVE`, `SERVICES`, and `WEB`.

- Each column contains one short ownership statement and one evidence link.
- Use a thin trace rule to show that these are connected surfaces of one product, not four unrelated skill categories.
- `APPLICATION` is visually primary because frontend/mobile remains the positioning center.
- Do not use framework logos.
- Do not use percentage proficiency or years-per-skill.
- Below 760px, stack as four labeled rows in the same order.
- For private professional evidence, use a lock icon plus the label `Private professional work`; never expose private repository names.

### 11.7 GitHub achievement row

Achievement badges are optional supporting material for the About or Open Source page.

- Maximum four badges.
- Badge artwork is displayed at 40-48px with a visible text label.
- Entire item links to the public GitHub profile or achievement detail.
- Use a neutral surface and border; do not reproduce GitHub's stat-card aesthetic.
- Include the caption that achievements are supporting signals and case studies hold the engineering evidence.
- Hide the section rather than show broken or stale badges when public retrieval fails.

## 12. Component specifications

### 12.1 Header

**Desktop**

- Height 72px.
- Transparent over canvas; use a bottom rule after the page scrolls 16px.
- Left: `NB /` wordmark followed by `Nishchay Bhatt` in text.
- Right: navigation.
- Active link uses cobalt text plus 2px underline with 4px offset.
- Contact may use a compact bordered button.

**Mobile**

- Height 64px.
- Wordmark remains visible.
- Menu button text should read `Menu`, not use an unlabeled hamburger alone.
- Expanded menu is a normal document-flow panel under the header, not full-screen unless required by very small viewports.
- Focus is moved into the menu on open and restored on close.

### 12.2 Hero

- No portrait is required. If a portrait is used, place it as a small documentary element in the metadata column, not a dominant lifestyle image.
- Headline maximum width 900px.
- Supporting paragraph maximum width 680px.
- CTAs align horizontally above 560px and vertically below.
- A thin trace may run from hero metadata toward the first proof section.

### 12.3 Proof metrics

- Use a single ruled row on desktop, 2x2 grid on tablet, vertical list on narrow mobile.
- Number uses display font at `--step-2` or `--step-3`.
- Label is plain language.
- Context appears on hover/focus only as an enhancement; it must also be visible or reachable without hover.
- Avoid icons.

### 12.4 Project record

Each selected project is a wide section separated by a strong top rule.

Content anatomy:

1. System index and status.
2. Title.
3. One-line statement.
4. Problem frame.
5. Two or three proof facts.
6. Stack metadata.
7. CTA.
8. One primary visual.

Interaction:

- The entire record must not become one giant link; preserve text selection and distinct link targets.
- Title and CTA link to the case study.
- On hover/focus within, shift the leading rule to cobalt and translate the arrow 3px.
- No scale-up transform on the whole record.

### 12.5 Package row

Use a compact ruled list rather than cards.

Columns on desktop:

- Package name.
- Purpose.
- Version/status.
- GitHub/npm actions.

Mobile stacks name, purpose, metadata, actions. Maintain a minimum 44px tap height.

### 12.6 Experience row

- Date column: 2-3 grid columns.
- Role/company: 3-4 columns.
- Summary: remaining columns.
- Current role has a cobalt marker.
- Expandable detail is optional; if implemented, use a semantic button and maintain URL-independent readability.

### 12.7 Buttons and links

**Primary button**

- Graphite background, warm text in light mode.
- Height 44-48px.
- Radius 4px.
- Horizontal padding 18-22px.
- Hover uses cobalt background.

**Secondary button**

- Transparent background.
- 1px strong border.
- Hover uses `--signal-soft` and signal border.

**Text link**

- Cobalt or current text color with underline.
- Underline offset 3px; thickness 1px, 2px on hover/focus.
- External links include a subtle arrow and accessible external-link text.

**Focus**

- `2px solid var(--focus)` plus 2px offset or `--shadow-focus`.
- Never remove focus outlines without a stronger replacement.

### 12.8 Code and terminal output

- Use code only where it supports a decision.
- Default background `#12151A` in both themes, text `#F3F1EA`.
- Syntax color palette must preserve contrast and use no more than five colors.
- Provide a copy button with success text.
- Long lines scroll within the block; the page itself must not overflow.
- Terminal examples use real selectable text, never screenshot-only output.

### 12.9 Diagrams

- Prefer SVG or HTML/CSS for responsive clarity.
- Node fill uses surface; border uses line-strong.
- Current/owned component uses a cobalt leading edge.
- External dependency uses neutral dashed outline.
- Failure branch uses amber, not red unless it is destructive.
- Maximum five nodes across a row.
- Every diagram has a prose caption and text alternative.

### 12.10 Screenshot figure

- Use `<figure>` and `<figcaption>`.
- Frame only when it clarifies the device or window context.
- Use a neutral 1px border and 8-12px radius.
- Do not add fake browser chrome to mobile screenshots.
- Provide zoom/lightbox only when small details matter.
- Lazy-load below the fold and specify width/height to prevent layout shift.

### 12.11 Footer

- Strong top rule.
- Large contact sentence at top.
- Contact links and location below.
- Technical build note in small muted type.
- Dark footer is permitted but not required; use the same visual language either way.

## 13. Homepage layout specification

### Hero viewport

At 1440px:

- Header spans full 12 columns.
- Eyebrow starts column 1.
- Headline spans columns 1-9.
- Role/location/availability metadata occupies columns 10-12 and aligns near the supporting paragraph.
- CTA row sits under the paragraph.
- The next section's top rule should be visible near the lower viewport edge on common laptop heights, signaling that content continues.

At mobile:

- Eyebrow.
- Headline.
- Supporting paragraph.
- Availability metadata.
- Primary and secondary CTA.
- Email text link.

Do not force a full-screen hero; recruiters should see proof quickly.

### Proof section

Place immediately after the hero. The heading can be visually hidden if context is clear, but must remain accessible as `Selected production evidence`.

### Product-surface section

Place after metrics and before selected work. Keep it compact - approximately 280-360px tall on desktop. Its job is to explain range before the project case studies provide depth. It must not look like a generic skills grid.

### Selected work

Each record should occupy roughly 70-90vh on large screens only if the content and visual justify it. Avoid artificial minimum heights. Alternate the media side, but keep reading order logical in the DOM.

### Open source

Use one introduction and a ruled list. `rn-bootloader` and `react-native-appcycle` may have miniature state visuals. Latch belongs in selected work and may be referenced here without duplicating the entire story.

### Experience

Use compact rows. Link to `/about` for the full narrative and résumé.

### Close

Use a large but concise contact statement and three actions. Avoid another decorative hero.

## 14. Case-study layout specification

### Header

- Breadcrumb: `Work / Project`.
- System index and status.
- Project title.
- One-sentence thesis.
- Metadata rail with role, period, stack, links, and confidentiality label.

### Narrative body

Recommended order:

1. Context.
2. Difficult part.
3. Responsibility.
4. System model.
5. Decisions.
6. Failure modes.
7. Result.
8. Retrospective.

### Sticky table of contents

Optional on desktop for case studies longer than 1,500 words. It must not be sticky on mobile. Use the Intersection Observer API sparingly to mark the current section, and do not rewrite browser history on every section change.

### Media rhythm

- First meaningful visual within the first two viewport heights.
- Alternate full-width diagrams with reading-column prose.
- Never place three large screenshots back to back without analysis between them.
- Captions explain what the visitor should notice.

## 15. Responsive behavior

### Breakpoints

Use content-driven breakpoints rather than device names:

- `0-479px`: compact mobile.
- `480-759px`: mobile/large phone.
- `760-1023px`: tablet and small laptop.
- `1024-1279px`: desktop.
- `1280px+`: wide desktop.

### Responsive rules

- Collapse two-column project records when either text column would fall below 320px.
- Convert metadata rails into inline definition lists below 1024px.
- Convert decision grids to stacked labeled rows below 640px.
- Preserve visible project status and CTA above screenshots on mobile.
- Do not hide technical content on mobile; reflow it.
- Tables may use a card-like stacked definition format when horizontal scrolling would damage comprehension.

## 16. Motion system

### Allowed motion

- Link underline or arrow movement: 120ms.
- Navigation/menu state: 200ms.
- Accordion disclosure: 200-240ms using opacity and grid-template rows or measured height.
- Page-entry content: optional 240-320ms fade/translate of 8px, one group only.
- Active trace node: color transition only.

### Disallowed motion

- Continuous background animation.
- Cursor followers.
- Text scramble.
- Typing simulation.
- Auto-playing project carousels.
- Scroll-linked transforms for body content.
- Staggering every child.
- Number count-up.

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Do not make content initially invisible when JavaScript or motion is disabled.

## 17. Interaction states

Every interactive component must define:

- Rest.
- Hover where hover exists.
- Keyboard focus.
- Active/pressed.
- Disabled if relevant.
- Loading if an action can take time.
- Error if the action can fail.
- Visited for editorial links where useful.

Navigation and CTA links should never use disabled states. If the destination does not exist, remove the link.

## 18. Accessibility specification

Target WCAG 2.2 AA.

### Required

- One `<h1>` per page and logical heading order.
- Skip link visible on focus.
- Landmark elements: header, nav, main, footer.
- Minimum 44x44px pointer targets for primary controls.
- Text contrast 4.5:1 for normal text and 3:1 for large text/UI boundaries.
- Focus indicators with at least 3:1 contrast against adjacent colors.
- No information represented by color alone.
- Alt text describes why an image is present, not every visual detail.
- Diagram text alternative describes nodes, direction, and conclusion.
- External-link behavior is announced when it matters.
- Accordions use button elements with `aria-expanded` and `aria-controls`.
- Mobile menu has focus management and Escape support.
- Code copy confirmation is announced through a polite live region.
- Respect `prefers-reduced-motion` and `prefers-contrast` when practical.

### Content accessibility

- Expand acronyms on first use in prose.
- Explain specialized telephony or package-security terms.
- Use tables only for actual relationships.
- Do not place critical text inside images.
- Captions should identify the decision or state shown.

## 19. Performance specification

The site itself must demonstrate frontend judgment.

### Budgets

- Lighthouse performance target: 95+ on representative mobile conditions.
- Largest Contentful Paint: under 2.5s at the 75th percentile.
- Interaction to Next Paint: under 200ms at the 75th percentile.
- Cumulative Layout Shift: under 0.1.
- Initial JavaScript for the homepage: aim below 100KB compressed, excluding framework runtime where unavoidable.
- No client-side JavaScript for static content blocks.
- Font payload: aim below 180KB total for the default view.
- Hero media: below 250KB where possible.

### Implementation rules

- Use React Server Components for static page composition.
- Add `use client` only to interactive islands.
- Generate project pages statically.
- Use `next/image` or equivalent responsive image handling.
- Specify image dimensions.
- Use AVIF/WebP with high-resolution originals preserved.
- Lazy-load below-fold media.
- Avoid a general animation runtime unless the final interactions justify it.
- Use native CSS transitions for basic states.
- Load analytics after interaction readiness and keep it privacy-conscious.
- Test with JavaScript disabled; primary content must remain available.

## 20. Stylesheet architecture

### Recommended layers

```css
@layer reset, tokens, base, layout, components, utilities, overrides;
```

### Responsibilities

- `reset`: box sizing, margin normalization, media defaults, button inheritance.
- `tokens`: color, type, space, size, motion, and theme properties.
- `base`: body, headings, paragraphs, links, selection, focus.
- `layout`: container, grid, stack, cluster, reading column, section rhythm.
- `components`: project record, metric, status, header, footer, figure, decision record.
- `utilities`: visually hidden, flow spacing, text measure, no-wrap, mono label.
- `overrides`: rare content-specific exceptions, kept small.

### Base stylesheet guide

```css
@layer reset {
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body, h1, h2, h3, p, figure, blockquote, dl, dd { margin: 0; }
  img, picture, svg, video { display: block; max-width: 100%; }
  button, input, textarea, select { font: inherit; }
}

@layer base {
  body {
    min-width: 320px;
    background: var(--canvas);
    color: var(--ink);
    font-family: var(--font-body);
    font-size: var(--step-0);
    line-height: 1.65;
    text-rendering: optimizeLegibility;
  }

  ::selection {
    background: var(--signal);
    color: white;
  }

  a {
    color: inherit;
    text-decoration-color: var(--signal);
    text-underline-offset: 0.2em;
  }

  :focus-visible {
    outline: 2px solid var(--focus);
    outline-offset: 3px;
  }
}

@layer layout {
  .container {
    width: min(100% - (2 * var(--page-gutter)), var(--content-max));
    margin-inline: auto;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: clamp(1rem, 2vw, 1.5rem);
  }

  .reading-column {
    width: min(100%, var(--reading-max));
  }

  .section {
    padding-block: clamp(4rem, 8vw, 8rem);
  }
}

@media (max-width: 1023px) {
  .grid { grid-template-columns: repeat(8, minmax(0, 1fr)); }
}

@media (max-width: 759px) {
  .grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
```

### Tailwind guidance

If Tailwind is used:

- Map semantic color names to CSS variables.
- Create named utilities for `container`, `reading-column`, and section rhythm.
- Avoid arbitrary values in component markup unless prototyping.
- Extract repeated component anatomy into components, not long `@apply` chains.
- Keep MDX prose styling explicit; do not accept default typography plugin behavior without adjustment.
- Use a class-merging utility only if variants require it.

## 21. Component and file architecture

Recommended structure:

```text
src/
  app/
    layout.tsx
    page.tsx
    work/
      page.tsx
      [slug]/page.tsx
    open-source/page.tsx
    about/page.tsx
    contact/page.tsx
  components/
    site/
      site-header.tsx
      site-footer.tsx
      skip-link.tsx
    work/
      project-record.tsx
      project-status.tsx
      project-meta.tsx
      decision-record.tsx
      failure-modes.tsx
    content/
      metric-row.tsx
      package-row.tsx
      experience-row.tsx
      figure.tsx
      code-block.tsx
  content/
  styles/
    tokens.css
    base.css
    layout.css
    components.css
```

Keep content components semantic and reusable. Avoid building a generic component library before the real pages establish repeated patterns.

## 22. Iconography and wordmark

### Wordmark

Use a text-based mark:

`NB /`

- Display or mono font.
- `NB` in ink, slash in cobalt.
- No enclosing circle or rounded square.
- Provide accessible text `Nishchay Bhatt` when the mark appears alone.

### Icons

- Use a single outline icon set if needed.
- Default size 18-20px, stroke 1.5-1.75px.
- Icons support labels; they do not replace labels in navigation.
- Project technologies do not need brand icons.

## 23. Theme strategy

Recommended launch: light theme only, with token architecture ready for dark mode.

Reason:

- The warm editorial surface is a distinctive part of the concept.
- A good dark theme doubles visual QA across diagrams, screenshots, code, focus, and semantic states.
- Theme toggles add interface work without improving recruiter comprehension.

Add dark mode later only after every primary page and media asset has been verified in both themes.

## 24. Empty, loading, and error states

The site is mostly static, so these states should be rare.

### Missing project content

Do not render placeholders. Exclude the project from navigation until published.

### Image failure

Preserve the figure caption and display a neutral bordered region with `Image unavailable`. The narrative must still make sense.

### Contact form failure

If a form is added, preserve entered values, explain the failure plainly, and offer the email link as fallback.

### 404

Heading: `This path does not resolve.`

Copy: `The page may have moved, or the project is not public.`

Actions: `Return home` and `View work`.

The 404 may use the system-trace motif but should not become a joke page.

## 25. Content-density rules

- Homepage project summaries: 70-120 words excluding metadata.
- Homepage paragraph maximum: 70 words.
- Case-study paragraph maximum: approximately 120 words before a break.
- Lists: 3-7 items.
- Stack tags: maximum 7 visible; put the full stack in metadata.
- Metrics: maximum 5 on the homepage.
- Navigation: maximum 5 primary links.
- Project visuals: one primary visual per homepage record.

## 26. Quality-assurance matrix

### Viewports

- 320 x 568.
- 390 x 844.
- 768 x 1024.
- 1024 x 768.
- 1280 x 800.
- 1440 x 900.
- 1920 x 1080.

### Browsers

- Current Chrome.
- Current Firefox.
- Current Safari.
- Current Edge.
- Mobile Safari.
- Chrome on Android.

### Interaction checks

- Keyboard-only navigation.
- Screen-reader landmark and heading navigation.
- 200% zoom.
- Increased text size.
- Reduced motion.
- High contrast where available.
- Slow 4G and CPU throttling.
- JavaScript disabled.
- Broken-image fallback.
- Long project title and long status metadata.

## 27. Design acceptance criteria

The design is ready only when:

- The target role is clear above the fold on mobile and desktop.
- Production proof appears before experimental work.
- The site does not resemble a SaaS landing-page template.
- The signature system-trace language is visible without overpowering content.
- All selected work is readable at three levels: scan, read, inspect.
- Focus states are obvious and consistent.
- The interface remains complete with reduced motion.
- Mobile contains the same evidence as desktop.
- No horizontal page overflow occurs at 320px.
- Performance budgets are met on the deployed build.
- Screenshots and diagrams have captions and text alternatives.
- No content claim exceeds the evidence in the identity and content documents.

## 28. Recommended implementation order

1. Implement tokens, typography, page container, grid, and focus behavior.
2. Build the header, footer, buttons, links, and status label.
3. Build the homepage with real final copy but placeholder media.
4. Build the project record and proof metrics.
5. Build one complete case study - preferably the offline-first console because it can be fully public.
6. Build the Latch case study with real source links and selectable CLI output.
7. Build a sanitized HiRobin case study after public-content approval.
8. Add open-source and about pages.
9. Replace placeholder media with optimized final assets.
10. Run accessibility, performance, responsive, and content-integrity QA.
11. Add optional motion last.

Do not start by perfecting a logo, dark mode, animated transitions, or a component catalog. The first critical milestone is a complete recruiter journey from hero to work to contact.
