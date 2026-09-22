export type WorkRecord = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  status: 'Production' | 'In progress' | 'Open source';
  category: string;
  summary: string;
  problem: string;
  outcome: string;
  stack: string[];
  role: string;
  period: string;
  confidentiality: string;
  cta: string;
  context: string;
  constraint: string;
  responsibility: string;
  decisions: { title: string; why: string; tradeoff: string }[];
  failures: { title: string; description: string }[];
  retrospective: string;
  prompts: string[];
};

export const work: WorkRecord[] = [
  {
    slug: 'hirobin',
    index: '01',
    title: 'HiRobin — AI calling assistant',
    shortTitle: 'HiRobin',
    status: 'Production',
    category: 'Mobile / Native / Real-time',
    summary:
      'Owning a React Native product across mobile architecture, Android telephony, call forwarding, payments, real-time chat, and VoIP foundations.',
    problem:
      'A calling assistant crosses mobile UI, Android platform behavior, telecom workflows, payments, and live server events. The client has to make those systems understandable to the user.',
    outcome:
      'Lead mobile contribution to a product with 1.1M installs and approximately 296K monthly active users. September 2026 snapshot.',
    stack: [
      'React Native',
      'TypeScript',
      'Android native modules',
      'WebSockets',
      'Payments',
      'Telephony',
    ],
    role: 'SDE 2 / Founding Engineer',
    period: 'Jan 2026 — Present',
    confidentiality: 'Sanitized professional work',
    cta: 'Read the case study',
    context:
      'HiRobin is an AI call-screening Android app with 1.1M installs and approximately 296K monthly active users in the September 2026 snapshot. I was the lead mobile contributor, building call-handling surfaces and the native and service integrations around them. Installs describe distribution; monthly active users describe usage. Neither is a revenue outcome.',
    constraint:
      'A screen is only one part of a calling workflow. Android permissions and telephony behavior, call-forwarding configuration, payment outcomes, and live server events each have independent states. The interface needs to communicate what is ready, what is pending, and what requires action. Voice-over-IP (VoIP) work remains foundational rather than a claim of a completed platform.',
    responsibility:
      'I built the co-pilot overlay, calls inbox, call-detail sheet, USSD call-forwarding setup, and in-app transcripts. I implemented native cold-start prefetch that seeds the React Query cache, notification deep-link routing, and new-architecture native modules. I owned a release train spanning 15+ production versions, including accessibility-service consent and an update gate. Payments and subscription work crossed the React Native client and Python backend: UPI mandates, trial/grace/premium states, and payment recovery. These are personal contributions within a team, not sole ownership of the entire product.',
    decisions: [
      {
        title: 'Cross the native boundary when the feature requires it',
        why: 'Telephony and dialer behavior depend on Android capabilities below the React Native interface. Native modules make those platform capabilities available to the product.',
        tradeoff:
          'Native integration adds device, permission, and lifecycle behavior to the verification surface.',
      },
      {
        title: 'Seed the client cache from native startup work',
        why: 'Native cold-start prefetch brings data into the React Query cache before the JavaScript interface would otherwise retrieve it. The hydration path served approximately 96K monthly users in the supplied snapshot.',
        tradeoff:
          'Native and JavaScript cache state need a consistent handoff. No measured before/after latency claim is made here.',
      },
      {
        title: 'Model subscriptions across the client and backend',
        why: 'Trial, grace, premium, and payment-recovery states need one understandable user journey even when a payment is delayed or interrupted.',
        tradeoff:
          'A wider integration boundary requires careful coordination and a clear account of which system confirms each outcome. Shipping this infrastructure does not establish revenue or conversion impact.',
      },
    ],
    failures: [
      {
        title: 'Platform permission or lifecycle restrictions',
        description:
          'A native capability is not equivalent to a ready feature. Permission and platform state must be considered together.',
      },
      {
        title: 'Connection loss during live communication',
        description:
          'Disconnected transport and an ended conversation are different states. Recovery behavior is an important interview topic.',
      },
      {
        title: 'An uncertain payment outcome',
        description:
          'A dismissed or interrupted payment interaction cannot by itself establish subscription status.',
      },
    ],
    retrospective:
      'The useful next question is how much of each workflow can be exercised independently of a physical call or a live payment. Explicit client/native/service boundaries make that discussion possible without exposing proprietary implementation details.',
    prompts: [
      'When did a native Android module become necessary?',
      'How do you distinguish platform readiness from UI readiness?',
      'How do payment and live-event states reach the client?',
    ],
  },
  {
    slug: 'operations-console',
    index: '02',
    title: 'Operations software for unreliable networks',
    shortTitle: 'Offline-first operations console',
    status: 'In progress',
    category: 'Web / Offline / Geospatial',
    summary:
      'A React and TypeScript field-operations console designed around map-heavy workflows, offline writes, reconnect synchronization, and constrained devices.',
    problem:
      'Operational software cannot assume a stable connection or a clean linear workflow. The interface has to preserve user intent and make synchronization state understandable.',
    outcome:
      'An evolving architecture record. Implementation and production validation are still in progress.',
    stack: [
      'React',
      'TypeScript',
      'Leaflet',
      'Zustand',
      'TanStack Query',
      'IndexedDB',
      'WebSockets',
    ],
    role: 'Independent portfolio build',
    period: 'In progress',
    confidentiality: 'Public design proposal',
    cta: 'View architecture and progress',
    context:
      'Dispatchers and field operators work with locations, assignments, and changing task status. A map is useful only when it remains coordinated with the work list and when an interrupted network does not silently erase a user’s action. This project extends my production mobile and operations experience into a complex web interface.',
    constraint:
      'The design has to distinguish the last server-confirmed state from a local action waiting to synchronize. This page documents a proposed operating model, not a deployed or performance-validated console. The diagrams are architecture studies rather than screenshots of a finished product.',
    responsibility:
      'I am developing the state model, offline queue, reconnection rules, geospatial interface, and performance budget. The proposed stack separates TanStack Query server state, Zustand workflow state, and IndexedDB persistence. Recharts supports planned operational summaries.',
    decisions: [
      {
        title: 'Separate remote data from local intent',
        why: 'A background refresh should not silently discard an operator’s unfinished action. Server state and local workflow state have different owners.',
        tradeoff:
          'The interface must explicitly derive the displayed state from both sources rather than render one undifferentiated store.',
      },
      {
        title: 'Persist an operation before reporting it as queued',
        why: 'The proposed IndexedDB queue gives pending work a durable record while the connection is unavailable.',
        tradeoff:
          'Persistence can fail too. Storage errors and queue migrations need their own visible recovery path.',
      },
      {
        title: 'Reconcile before declaring synchronization complete',
        why: 'The reconnect model separates queued, sending, confirmed, and conflicted states. A conflict returns to the operator for review.',
        tradeoff:
          'Operator review is slower than silent overwrite, but preserves visibility into competing changes. Server idempotency is a required dependency.',
      },
    ],
    failures: [
      {
        title: 'Network drops after a server accepts a write',
        description:
          'Proposed behavior: retry with a stable operation identifier. This needs a server-side idempotency contract before it can be guaranteed.',
      },
      {
        title: 'Another operator changes the same record',
        description:
          'Proposed behavior: retain local intent, compare revisions, and surface a conflict instead of silently overwriting either change.',
      },
      {
        title: 'Local storage cannot accept a write',
        description:
          'Proposed behavior: show that the action was not saved. Never claim a durable queue until persistence succeeds.',
      },
    ],
    retrospective:
      'The next validation step is a narrow offline-to-online workflow with realistic seeded data. A deployed demo, automated synchronization tests, constrained-device measurements, and keyboard testing are required before calling this project complete.',
    prompts: [
      'Where should local intent live relative to cached server data?',
      'What must the backend guarantee for retries to be safe?',
      'How should map and list selection remain synchronized?',
    ],
  },
  {
    slug: 'latch',
    index: '03',
    title: 'Safer package execution and installation',
    shortTitle: 'Latch',
    status: 'Open source',
    category: 'Developer tools / Package safety',
    summary:
      'A local-first audit pipeline that inspects npm packages before execution or installation and makes the approval decision explicit.',
    problem:
      'Package runners combine retrieval and execution into one convenient step. Latch changes the order: resolve, verify, inspect, evaluate policy, then run only after approval.',
    outcome:
      'Three published packages. One shared inspection and policy engine.',
    stack: [
      'TypeScript',
      'Registry resolution',
      'Integrity verification',
      'Static analysis',
      'Policy engine',
      'CLI / CI',
    ],
    role: 'Creator & maintainer',
    period: 'Published open source',
    confidentiality: 'Public source and packages',
    cta: 'See the audit model',
    context:
      'Executing a package is a trust decision. Convenient package runners often make downloading and executing feel like a single operation. Latch introduces an inspection boundary so a person or a continuous integration (CI) policy can make a decision before execution or installation.',
    constraint:
      'Local static analysis can identify risk signals; it cannot prove that an arbitrary package is safe. Registry resolution, integrity checks, cache identity, policy decisions, and the execution target have to agree. The inspected version must be the version subsequently delegated to the runner.',
    responsibility:
      'I built the shared audit engine and the execution and installation workflows. latch-core owns registry resolution, scanning, integrity, policy, scoring, caching, and reporting. latchx provides the package execution workflow; latchpm applies the same boundary to an npm installation workflow.',
    decisions: [
      {
        title: 'Separate the audit engine from the command-line interface',
        why: 'Execution and installation need the same interpretation of package contents and policy. A shared engine keeps these rules consistent.',
        tradeoff:
          'The engine’s report and decision contracts must work for both interactive and automated consumers.',
      },
      {
        title: 'Resolve an exact version before inspection',
        why: 'A moving version range is not an immutable execution target. Version alignment connects the approval decision to the artifact being used.',
        tradeoff:
          'Registry and cache identity become part of correctness, not just a download optimization.',
      },
      {
        title: 'Report signals rather than a malware verdict',
        why: 'Lifecycle scripts, binaries, suspicious patterns, and package changes are context for a policy decision. Static inspection has hard limits.',
        tradeoff:
          'The user still has to make a trust decision. Latch is not a sandbox or a complete package-manager replacement.',
      },
    ],
    failures: [
      {
        title: 'Integrity mismatch',
        description:
          'Integrity verification is a gate before inspection and approval. A mismatched artifact cannot be treated as the expected package.',
      },
      {
        title: 'Policy denial',
        description:
          'A denial stops the delegated workflow. Automated runs need a deterministic result instead of an interactive approval prompt.',
      },
      {
        title: 'Stale or ambiguous package identity',
        description:
          'Package, version, registry, and integrity belong in cache identity. A cached report must describe the same artifact being considered.',
      },
    ],
    retrospective:
      'The important boundary to keep sharpening is between an observable risk signal and a security claim. More checks should improve the explanation of a decision without implying that a clean report proves safety.',
    prompts: [
      'How do you ensure the inspected and executed versions match?',
      'What belongs in the shared engine rather than a CLI wrapper?',
      'Where does static package inspection stop being useful?',
    ],
  },
];
