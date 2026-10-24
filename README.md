# madebysimon.dev

The studio site for Made by Simon: Windows apps on the Microsoft Store, and the
tools we build at the Italian Ministry of Culture.

Built with [Astro](https://astro.build) (static output, no client JavaScript by
default) and [Tailwind CSS v4](https://tailwindcss.com). Fonts are self-hosted
from Fontsource.

## Running it

Needs Node 22.23 or newer.

```bash
npm install
npm run dev       # http://localhost:4321, reloads on save
npm run build     # type-checks, then writes the static site to dist/
npm run preview   # serves dist/ the way production will
npm run format    # Prettier, including Tailwind class ordering
npm run icons     # regenerates the favicons and og.png in public/
```

`npm run icons` drives headless Chromium through `playwright-core`. On a new
machine, install the browser once with
`npx playwright-core install chromium-headless-shell`.

## Where things live

- `src/data/`: the words. Apps, work projects, nav and social links are plain
  TypeScript lists, so adding an app or a project means adding an entry there.
- `src/data/boot.ts`: the start-up terminal's lines and its spinner verbs.
  Add a verb and it joins the random draw.
- `src/components/`: the building blocks (`MarkFull`, `MarkSmall`, `AppCard`,
  `WorkCard`, `Button`...), with the page sections in `sections/`.
- `src/styles/global.css`: the brand tokens in Tailwind's `@theme`. Tailwind's
  default colours are switched off, so `bg-ink`, `text-muted` and friends are
  the whole palette.
- `brand/`: the mark masters. `CONTEXT.md` has the brand rules.
- `reference/site-mockup.html`: the design-canvas export the page was rebuilt
  from. Reference only; it is not shipped.

## The mark

Use `<MarkSmall size={n} />` up to 128px and `<MarkFull />` above that. The
small mark applies the optical correction (a thicker frame below 128px) by
itself. The full mark is inlined rather than used as an `<img>` so its text
renders in the site's fonts.
