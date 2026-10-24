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
      'The office’s ticketing system, installable like an app. Sign in with your work Microsoft account and updates arrive live, or as push notifications when it’s closed. A ticket can go on hold with a reason the requester can see, and time spent waiting on someone else is counted apart from time spent fixing.',
    tags: ['React', 'Fluent UI', 'Node.js', 'MongoDB', 'Entra ID', 'Web Push'],
  },
  {
    name: 'Posta Maestro',
    kind: 'Archive',
    description:
      'Years of ordinary and certified email (PEO and PEC) used to sit in 50 GB Outlook files on shared folders. Posta Maestro turns them into one searchable reading room. It unwraps every PEC envelope, so you search the actual message rather than its “POSTA CERTIFICATA:” wrapper, and each mailbox is open only to the people allowed to read it.',
    tags: ['React', 'Fastify', 'PostgreSQL full-text', 'PST import', 'Entra ID'],
  },
  {
    name: 'Legal Assistant',
    kind: 'PWA + MCP',
    badge: 'In the making',
    description:
      'Turns decades of circulars, legal opinions and rulings, old scans included, into one searchable library. It checks a draft’s citations against Italian law, down to whether an article was in force on a given date, and shows every check with its source: checks, never verdicts. It also speaks MCP, so an AI assistant can search the same library.',
    tags: ['React', 'TypeScript', 'SQLite FTS5', 'Tesseract OCR', 'MCP server', 'Normattiva'],
  },
  {
    name: 'Library Manager',
    kind: 'Web app',
    description:
      'Runs a Ministry library in Rome. Readers sign in with their Microsoft account, browse the catalogue and request loans, while librarians keep track of every copy, loan and request. New books arrive by Excel import, with details and covers filled in from Google Books and Open Library. And the emails look right even in Outlook’s dark mode.',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Drizzle ORM', 'Entra ID'],
  },
];
