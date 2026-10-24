import type { Project } from './project';

/** Personal experiments, off the clock. */
export const lab: Project[] = [
  {
    name: 'vita',
    kind: 'Paper trading',
    description:
      'A trading system built around one fear: that it will evolve into the world’s best overfitter, then lie to itself about it. Every hypothesis goes into an append-only, hash-chained journal before the market answers, and a sealed risk kernel keeps live trading locked until out-of-sample evidence earns it. Until then, it trades on paper.',
    tags: ['Python', 'SQLite', 'Hash chain', 'Walk-forward testing'],
  },
];

/** Contributions merged into other people's projects. */
export const upstream: Project[] = [
  {
    name: 'openmediavault',
    kind: 'Merged upstream',
    description:
      'UPS dashboard widgets for the Debian-based NAS system: a card with the UPS and battery details, and a battery gauge that marks the threshold where the NAS shuts itself down. Both run on one new RPC method that reads Network UPS Tools.',
    tags: ['PHP', 'Workbench YAML', 'Network UPS Tools'],
    href: 'https://github.com/openmediavault/openmediavault/pull/2234',
  },
];
