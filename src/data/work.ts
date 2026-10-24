export interface WorkItem {
  name: string;
  /** Short kind label, shown top right. */
  kind: string;
  /** Replaces the kind label with a lime badge, for work still in progress. */
  badge?: string;
  description: string;
  tags: string[];
  /** Detail page, if the project gets one. */
  href?: string;
}

export const work: WorkItem[] = [
  {
    name: 'Helpdesk',
    kind: 'PWA',
    description:
      'The office’s ticketing system, installable like an app. Sign in with your work Microsoft account, and updates reach you live while it’s open and as push notifications when it isn’t.',
    tags: ['React', 'Node.js', 'Entra ID', 'Web Push', 'Docker'],
  },
  {
    name: 'Posta Maestro',
    kind: 'Archive',
    description:
      'Years of certified email (PEC and PEO) used to live in 50 GB Outlook files on shared folders. Posta Maestro turns them into one searchable archive, with each office seeing only its own mail.',
    tags: ['PST ingest', 'Full-text search', 'Entra ID', 'vSphere'],
  },
  {
    name: 'Legal Assistant',
    kind: 'Assistant',
    badge: 'In the making',
    description:
      'Checks a draft against decades of internal circulars, legal opinions and current Italian law, and points to the sources. It also speaks MCP, so an AI assistant can search the same library.',
    tags: ['MCP server', 'Normattiva', 'PDF to Markdown', 'React'],
  },
  {
    name: 'dflibrary',
    kind: 'Library',
    description:
      'Library management for the office, with notification emails that look right everywhere, including Outlook’s dark mode, which tries very hard to ruin every logo.',
    tags: ['HTML email', 'nginx', 'Dark mode'],
  },
];
