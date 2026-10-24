import type { ImageMetadata } from 'astro';
import udcIcon from '../assets/apps/ultimate-desktop-cleaner.png';

export interface App {
  name: string;
  description: string;
  icon: ImageMetadata;
  status: string;
  /** Store listing, once the app is published. */
  href?: string;
}

export const apps: App[] = [
  {
    name: 'Ultimate Desktop Cleaner',
    description:
      'Meet Ruggy, a cloth-physics rug that hides your desktop icons, and Dustin, his robot vacuum sidekick. Your Windows 11 desktop, finally clean.',
    icon: udcIcon,
    status: 'Coming to the Microsoft Store',
  },
];
