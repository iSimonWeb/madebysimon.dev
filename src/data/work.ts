import type { Project } from './project';
import helpdeskIcon from '../assets/work/helpdesk.png';
import intranetPortalIcon from '../assets/work/intranet-portal.png';
import legalAssistantIcon from '../assets/work/legal-assistant.png';
import libraryManagerIcon from '../assets/work/library-manager.svg';
import postaMaestroIcon from '../assets/work/posta-maestro.svg';

export const work: Project[] = [
  {
    name: 'Helpdesk',
    icon: { src: helpdeskIcon },
    kind: 'PWA',
    description:
      'The office’s ticketing system, installable like an app. Sign in with your work Microsoft account and updates arrive live, or as push notifications when it’s closed. A ticket can go on hold with a reason the requester can see, and time spent waiting on someone else is counted apart from time spent fixing.',
    tags: ['React', 'Fluent UI', 'Node.js', 'MongoDB', 'Entra ID', 'Web Push'],
  },
  {
    name: 'Intranet Portal',
    icon: { src: intranetPortalIcon },
    kind: 'Intranet',
    description:
      'The home page for everyone working in the building, laid out as a bento grid: news, alerts, safety teams and the canteen menu each get their own tile. The contact book reads its directory from the Helpdesk, colour-coded icons jump straight to the office services, and admins edit it all behind Microsoft sign-in.',
    tags: ['React', 'Vite', 'Express', 'MongoDB', 'Entra ID'],
  },
  {
    name: 'Posta Maestro',
    icon: { src: postaMaestroIcon },
    kind: 'Archive',
    description:
      'Years of ordinary and certified email (PEO and PEC) used to sit in 50 GB Outlook files on shared folders. Posta Maestro turns them into one searchable reading room. It unwraps every PEC envelope, so you search the actual message rather than its “POSTA CERTIFICATA:” wrapper, and each mailbox is open only to the people allowed to read it.',
    tags: ['React', 'Fastify', 'PostgreSQL full-text', 'PST import', 'Entra ID'],
  },
  {
    name: 'Legal Assistant',
    icon: { src: legalAssistantIcon },
    kind: 'PWA + MCP',
    badge: 'In the making',
    description:
      'Turns decades of circulars, legal opinions and rulings, old scans included, into one searchable library. It checks a draft’s citations against Italian law, down to whether an article was in force on a given date, and shows every check with its source: checks, never verdicts. It also speaks MCP, so an AI assistant can search the same library.',
    tags: ['React', 'TypeScript', 'SQLite FTS5', 'Tesseract OCR', 'MCP server', 'Normattiva'],
  },
  {
    name: 'Library Manager',
    icon: { src: libraryManagerIcon, tile: true },
    kind: 'Web app',
    description:
      'Runs a Ministry library in Rome. Readers sign in with their Microsoft account, browse the catalogue and request loans, while librarians keep track of every copy, loan and request. New books arrive by Excel import, with details and covers filled in from Google Books and Open Library. And the emails look right even in Outlook’s dark mode.',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Drizzle ORM', 'Entra ID'],
  },
];
