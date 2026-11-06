import { site } from '../data/site';

/** A link that leaves the site, as opposed to an anchor or a page of ours. */
export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href) && new URL(href).origin !== new URL(site.url).origin;
}

/** Attributes for a link: external ones open in a new tab. */
export function linkAttrs(href: string): Record<string, string> {
  return isExternal(href) ? { target: '_blank', rel: 'noopener' } : {};
}
