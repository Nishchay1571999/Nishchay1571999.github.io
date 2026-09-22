export const profile = {
  name: 'Nishchay Bhatt',
  role: 'Frontend & Mobile Engineer',
  location: 'Bengaluru, India',
  email: 'nishchay.bhat@gmail.com',
  github: 'https://github.com/Nishchay1571999',
  linkedin: 'https://www.linkedin.com/in/nishchay-bhatt/',
  availability: 'Open to SDE-2 / Senior Frontend & React Native roles',
  opportunities: 'Bengaluru, India-wide & suitable remote opportunities',
  headline:
    'I build product interfaces that hold up when the system gets complicated.',
  summary:
    'React and React Native engineer with 4+ years of experience across real-time applications, native Android integrations, payments, telephony, operational tooling, and client performance.',
  resume: '/resume.pdf',
};

export const metrics = [
  {
    value: '150K+',
    label: 'daily active users',
    context: 'Real-time mobile products at Jumbo',
  },
  {
    value: '900K/mo',
    label: 'payment events',
    context: 'In-house payment infrastructure at Jumbo',
  },
  {
    value: '99.3%',
    label: 'crash-free rate',
    context: 'Field-operations application at Royal Brothers',
  },
  {
    value: '35% / 42%',
    label: 'JS bundle / app size reduction',
    context: 'Client performance work at Royal Brothers',
  },
];

export const surfaces = [
  {
    title: 'Application',
    description: 'Complex client state. End-to-end product delivery.',
    evidence: 'React Native product ownership',
    href: '/work/hirobin#responsibility',
  },
  {
    title: 'Native Android',
    description: 'The platform behavior beneath the interface.',
    evidence: 'Telephony & lifecycle integrations',
    href: '/work/hirobin#system-model',
  },
  {
    title: 'Services',
    description: 'Features that cross the client boundary.',
    evidence: 'Payments & real-time events',
    href: '/work/hirobin#constraints',
  },
  {
    title: 'Web',
    description: 'Operational interfaces built for real conditions.',
    evidence: 'Offline-first architecture',
    href: '/work/operations-console',
  },
];

export const packages = [
  {
    name: 'rn-bootloader',
    purpose: 'Give startup work an explicit order.',
    description:
      'Phase-based React Native startup with blocking and non-blocking tasks, retry, timeout, and readiness controls.',
    version: '0.1.1',
    github: `${profile.github}/rn-bootloader`,
    npm: 'https://www.npmjs.com/package/rn-bootloader',
  },
  {
    name: 'react-native-appcycle',
    purpose: 'Make application lifecycle visible.',
    description:
      'Foreground/background awareness, React-powered overlays, and native Android entry points in one lifecycle API.',
    version: '0.2.1',
    github: `${profile.github}/react-native-appcycle`,
    npm: 'https://www.npmjs.com/package/react-native-appcycle',
  },
  {
    name: 'latch-core',
    purpose: 'Inspect before deciding.',
    description:
      'The shared engine for registry resolution, integrity verification, static risk signals, caching, and policy.',
    version: '0.1.3',
    github: 'https://github.com/meredian-labs/latch-core',
    npm: 'https://www.npmjs.com/package/latch-core',
  },
  {
    name: '@meredian-labs/latchx',
    purpose: 'Audit before execution.',
    description:
      'A package runner that makes the inspection and approval decision explicit before delegating execution.',
    version: '0.1.3',
    github: 'https://github.com/meredian-labs/latchx',
    npm: 'https://www.npmjs.com/package/@meredian-labs/latchx',
  },
  {
    name: '@meredian-labs/latchpm',
    purpose: 'Audit before installation.',
    description:
      'An npm installation wrapper that puts local inspection and policy evaluation ahead of installation.',
    version: '0.1.2',
    github: 'https://github.com/meredian-labs/latchpm',
    npm: 'https://www.npmjs.com/package/@meredian-labs/latchpm',
  },
];

export const experience = [
  {
    company: 'HiRobin',
    legal: 'Taskgeine Pvt Ltd',
    role: 'SDE 2 / Founding Engineer',
    period: 'Jan 2026 — Present',
    location: 'Bengaluru',
    summary:
      'Core React Native ownership for an AI phone assistant, spanning Android telephony, call forwarding, subscriptions, payments, real-time chat, and VoIP foundations.',
  },
  {
    company: 'Buzzworthy',
    legal: '',
    role: 'SDE 2',
    period: 'Sep 2025 — Jan 2026',
    location: 'Bengaluru',
    summary:
      'Financial-product workflows, beehive operations modules, product-discovery tooling, and maintenance of IBL Bank’s volunteering portal.',
  },
  {
    company: 'Jumbo Gaming',
    legal: '',
    role: 'SDE 1',
    period: 'Dec 2024 — Sep 2025',
    location: 'Delhi',
    summary:
      'Real-time React Native games for 150K+ daily active users, payment infrastructure processing approximately 900K monthly transactions, and internal Next.js analytics.',
  },
  {
    company: 'Royal Brothers',
    legal: '',
    role: 'Software Engineer 1 / React Native Developer',
    period: 'Sep 2022 — Dec 2024',
    location: 'Bengaluru',
    summary:
      'Owned field-operations software across React Native and React, improving reliability, bundle and application size, performance, and operational workflows.',
  },
  {
    company: 'Value Floatr',
    legal: 'Value Floatr Pvt Ltd',
    role: 'React Native Android Developer Intern',
    period: 'Jun 2022 — Aug 2022',
    location: 'India',
    summary:
      'Contributed to production React Native Android development, debugging, and release work.',
  },
];

export const principles = [
  {
    title: 'Make state visible.',
    description:
      'Explicit states, transitions, and ownership. From boot phases and background lifecycle to payment status and offline queues.',
  },
  {
    title: 'Design around failure.',
    description:
      'Retry, timeout, network loss, and platform restrictions are inputs to the design. They belong in the first conversation.',
  },
  {
    title: 'Measure the client.',
    description:
      'Smaller bundles. More reliable sessions. Responsive interactions. Performance work should end in an observable change.',
  },
];

// Supplied by Nishchay on 22 September 2026. Usage snapshot: September 2026.
// These are product-scale figures, not revenue or individual impact attribution.
export const hirobinEvidence = [
  { value: '1.1M', label: 'app installs' },
  { value: '~296K', label: 'monthly active users' },
  { value: '15+', label: 'production releases owned' },
];

export const hirobinContributions = [
  {
    title: 'Call handling',
    detail:
      'Co-pilot overlay, calls inbox, call-detail sheet, in-app transcripts, and USSD call-forwarding setup. The core call-handling surfaces reached approximately 113K–125K monthly users in the supplied snapshot.',
  },
  {
    title: 'Startup & client state',
    detail:
      'Native cold-start prefetch seeding the React Query cache, notification deep-link routing, PowerSync offline cache, and a server-driven home timeline. The native hydration path served approximately 96K monthly users.',
  },
  {
    title: 'Platform & release ownership',
    detail:
      'New-architecture native modules, VoIP microphone and overlay fixes, and 15+ production versions from 1.4.9 to 1.8.8. Release work included screen-scan consent, accessibility-service compliance, and a health-driven forced-update gate.',
  },
  {
    title: 'Payments & subscriptions',
    detail:
      'End-to-end React Native and Python backend work: Razorpay UPI mandates, trial/grace/premium states, and payment-recovery workflows.',
  },
];
