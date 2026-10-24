import type { ImageMetadata } from 'astro';
import udcIcon from '../assets/apps/ultimate-desktop-cleaner.png';

export interface App {
  name: string;
  description: string;
  icon: ImageMetadata;
  status: string;
  tags: string[];
  /** Store listing, once the app is published. */
  href?: string;
}

export const apps: App[] = [
  {
    name: 'Ultimate Desktop Cleaner',
    description:
      'Meet Ruggy, a cloth-physics rug you drag over desktop clutter, and Dustin, his robot vacuum sidekick, who eats the files you feed him. They land in the Recycle Bin, so you can always make him spit them out. Your Windows 11 desktop, finally clean.',
    icon: udcIcon,
    status: 'Coming to the Microsoft Store',
    tags: ['Tauri', 'Rust', 'three.js', 'TypeScript'],
  },
];
