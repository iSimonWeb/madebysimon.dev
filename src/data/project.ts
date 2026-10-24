import type { ImageMetadata } from 'astro';

export interface Project {
  name: string;
  /** Short kind label, shown top right. */
  kind: string;
  /** Replaces the kind label with a lime badge, e.g. for work still in progress. */
  badge?: string;
  description: string;
  tags: string[];
  /** The app's own icon. `tile` puts a paper square behind icons drawn on transparent. */
  icon?: { src: ImageMetadata; tile?: boolean };
  /** Detail page or external page; the whole card becomes the link. */
  href?: string;
}
