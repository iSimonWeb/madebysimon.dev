# Changelog

All notable changes to madebysimon.dev. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow
`major.minor.fix`.

## [Unreleased]

## [0.5.0] - 2026-10-24

- The Intranet Portal joins At work: the building's home page as a bento
  grid, with the contact book fed by the Helpdesk directory and colour-coded
  shortcuts to the office services.
- With five projects, the last card spans the full row instead of leaving a
  hole, and card text stops at 68 characters so the wide card stays readable.
- `WorkCard` became `ProjectCard`, with a light tone for cards on paper, and
  the `Project` type moved to its own module so other sections can use it.

## [0.4.2] - 2026-10-24

- Pushes to `main` deploy to GitHub Pages through the official Astro action,
  with a manual **Run workflow** button too.
- dflibrary appears on the site as Library Manager, a name that says what it
  is to someone outside the office.

## [0.4.1] - 2026-10-24

- The project descriptions now come from each project's own README, not
  from what we remembered in the branding chat. dflibrary was described as an
  email template. It is a whole library system (catalogue, loans, copies,
  Excel import with Google Books and Open Library lookup), and the dark-mode
  emails are one detail of it.
- Posta Maestro now tells its real story, unwrapping the PEC envelope.
  Legal Assistant tells its stance (checks with sources, never verdicts) and
  mentions the OCR of old scans. Helpdesk explains the hold state.
- Tech tags match the real stacks. vSphere went, because it describes the
  hosting rather than the tool. Ultimate Desktop Cleaner gained tags and its
  best trick: Dustin eats files into the Recycle Bin and can spit them back
  out.

## [0.4.0] - 2026-10-24

- The easter egg now plays itself out. When the card scrolls into view, the
  letters of Simone Lazzari hop over and under each other into Simon
  Realizza, swapping case in mid-air (L to l, r to R). Pressing the name
  shuffles it back.
- The line is monospace, so every move is a whole number of `ch`. Astro works
  out the letter mapping at build time (nearest free matching letter) and
  fails the build if the two words stop being anagrams. The browser only
  plays the hops with the Web Animations API.
- The name is a real button whose accessible name follows the visible word,
  and the explanatory sentence stays as plain text. With reduced motion the
  letters swap in place without travelling.

## [0.3.0] - 2026-10-24

- The nav and hero sit on a perfboard, and the pointer is a soldering iron:
  pads under it get tinned (they swell and turn lime with an ink rim), then
  cool back down over a couple of seconds, leaving a short trail behind the
  text.
- The pads themselves are a CSS dot pattern, so the board shows without
  JavaScript and with reduced motion. Only the hot pads are drawn on a
  canvas, and its animation loop stops as soon as everything has cooled, so
  an idle page costs no CPU.
- The board is a background layer measured down to the end of the hero, which
  keeps `<header>` and `<main>` as they were. Our first attempt wrapped nav
  and hero together and pushed the hero out of `<main>`.

## [0.2.0] - 2026-10-24

- The site starts up in a terminal that builds Simon from source:
  `make simon` finds no prebuilt binaries, a spinner cycles through maker
  verbs (soldering, rubber-ducking, calibrating the bed...), and
  `./simon --serve` brings the instance up. It is our nod to being
  self-taught. Then it rolls up like a shop shutter, revealing a page that was
  already rendered underneath, so nothing waits on it.
- It plays once per browser session, never with reduced motion or without
  JavaScript, is hidden from screen readers, and any key, click, scroll or tap
  skips it (gone in about 0.3 s). A full run takes about 4.9 s. If the script
  never runs, a CSS failsafe hides it after 10 s.
- The script is small enough that Astro inlines it, so it adds no request.
  The lines and the verb list live in `src/data/boot.ts`.
- We found that a `clip-path` transition from `none` never fires
  `transitionend`, so the terminal starts at `inset(0)` and the exit also has
  a timer fallback.

## [0.1.0] - 2026-10-24

- We brought over the handover from the branding session: the brief
  (`CONTEXT.md`), the mark in every size and colourway (`brand/`), and the
  design-canvas export we rebuild from (`reference/site-mockup.html`).
- The whole page is up, rebuilt from the design canvas as Astro components:
  nav, hero with the full element tile, Apps, At work, About, Contact and
  footer. The words live in `src/data/`, so a new app or project is one entry.
- We chose Tailwind v4 over the plain CSS the brief proposed. The brand tokens
  sit in `@theme` with Tailwind's default palette switched off, so the
  utilities only offer brand colours.
- Fonts are the variable Fontsource builds: one Latin file per family (about
  22 KB each) instead of seven static weights, both preloaded because the
  wordmark, the eyebrow and the headline all render above the fold.
- `MarkSmall` applies the optical correction by size, using the measured
  scales for 16, 32, 40, 56 and 64 px and the same curve (`1 - 2.72/size`) for
  anything else.
- The Ultimate Desktop Cleaner icon replaces the placeholder. It is a
  transparent illustration, so it sits on the card without a tile behind it.
  Astro serves it as WebP at 1x, 2x and 3x (4 to 16 KB) from a 1024 px copy of
  the 2048 px original.
- Favicons (SVG, a 16/32/48 ICO, and a full-bleed 180 px apple-touch icon
  that iOS rounds itself) and the 1200x630 Open Graph image are generated by
  `npm run icons` from the mark masters. Each favicon size gets its own optical
  scale. The OG image is rendered in headless Chromium because the tile's live
  text needs the brand fonts. The ICO is packed by hand, which saved us a
  dependency.
- Buttons are keycaps: they sit on a hard ink edge and press down when
  clicked.
- Checked at 1280 and 360 px wide, with no horizontal scroll at either.

