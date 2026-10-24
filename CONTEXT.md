# madebysimon.dev — handoff brief

Read this first. It's the full context from the branding session, written for Claude Code.
Owner: Simon (Rome). Talk to him in English, casually; he likes jokes. Code identifiers in English, always.

## What this is

Personal studio site for **Made by Simon** — Simon's Microsoft Store publisher name and maker identity.
It shows two things:

1. **Apps** he publishes on the Microsoft Store (first one: *Ultimate Desktop Cleaner*).
2. **Work** — in-house tools he builds at the Italian Ministry of Culture.

- Domain: `madebysimon.dev` (registered at Cloudflare, DNS on Cloudflare)
- Repo: `madebysimon.dev` (public, GitHub), local folder `~/development/madebysimon`
- Hosting: GitHub Pages, deployed by GitHub Actions
- Handles: `madebysim0n` (zero, not O) on Instagram and X. Publisher name on the Store: "Made by Simon".

## Stack (proposed — confirm with Simon before scaffolding)

- **Astro**, static output, deployed with the official `withastro/action` workflow. Simon knows React/Node, so Astro components feel familiar, and the output is plain HTML/CSS with zero JS by default.
- Plain CSS with custom properties (tokens below). No Tailwind unless Simon asks.
- **Self-host the fonts** with `@fontsource/space-grotesk` and `@fontsource/red-hat-mono` instead of the Google Fonts CDN (avoids the EU/GDPR issue with Google Fonts and one third-party request).
- If Simon prefers no framework: plain HTML + CSS in `/site`, deployed with `actions/upload-pages-artifact` + `actions/deploy-pages`. Same design.

## Brand

### The mark (Simon designed it)
A dark rounded square frame around a lime field. The field has two angular notches — upper-right and lower-left — that turn it into an **S**.

- **Full size** (≥128 px, hero, Store logo): an element tile. Big "Si" (Silicon, and the first two letters of *Si*mon), "92" top-left (his birth year), "SIM0N" at the bottom.
- **Small** (≤128 px, nav, favicon, app lists): the notched shape only, no text.
- **Two versions, always two colors**: *positive* (dark frame, lime field, dark text) on light backgrounds; *inverted* (lime frame, dark field, lime text) on dark backgrounds. Never a third color in the mark.
- **Optical correction for small sizes**: the frame gets +1px below 128px (64px → 9px frame, 32px → 5px, 16px → 3px). Already baked into `brand/mark-{64,32,16}-*.svg`. Don't scale the 128 master down for small use; use the matching file.

Files in `brand/`:
- `mark-full-positive.svg`, `mark-full-inverted.svg` — contain **live text**. Inline them in the HTML (so they pick up the self-hosted fonts). Used as `<img>`, the text would fall back to system fonts.
- `mark-{128,64,32,16}-{positive,inverted}.svg` — text-free, safe anywhere.
- `favicon.svg` — the 32px-corrected positive mark. Also generate `favicon.ico` (16/32/48) and `apple-touch-icon.png` (180) from the matching masters.

### Tokens

```css
--ink: #2b2c30;        /* frame, dark sections, primary text on light */
--ink-deep: #121316;   /* body text */
--accent: #c8f03c;     /* acid lime: mark field, badges, highlights. Never text on light bg (fails contrast) */
--paper: #f4f4f1;      /* page background */
--card: #ffffff;
--card-dark: #36373c;  /* cards inside dark sections */
--muted: #55565b;      /* secondary text on light (4.5:1+ on paper) */
--muted-on-dark: #c4c5ca;
--line-on-dark: #6b6c72;
```

Type:
- **Space Grotesk** 400/500/600/700 — headings and body.
- **Red Hat Mono** 500/600/700 — the wordmark `madebysim0n`, eyebrows, tags, numbers. Chosen because its zero is **slashed** — that's the whole point of the handle. Don't swap it for a mono without a slashed zero.

### Simon's design rules (from past projects — respect them)
- The background must scroll with the content. No fixed/parallax backgrounds with text floating over them.
- He likes UI that feels solid, concrete, a bit tactile.
- No sketchy/comic display fonts. Legibility first.

## Page structure

Reference: `reference/site-mockup.html` (exported from the design canvas — inline styles, rebuild it cleanly with components and CSS, don't ship it).

1. **Nav** — small positive mark (40px) + `madebysim0n` wordmark; links Apps · Work · About · Contact.
2. **Hero** — full-size positive tile; eyebrow "Software, made in Rome"; H1 "Small, solid software."; intro; buttons "See the apps" / "See the work".
3. **Apps** (light) — card per app. *Ultimate Desktop Cleaner*: "Meet Ruggy, a cloth-physics rug that hides your desktop icons, and Dustin, his robot vacuum sidekick. Your Windows 11 desktop, finally clean." Badge "Coming to the Microsoft Store". Plus a dashed "Next one — Still on the workbench." placeholder.
4. **At work** (full-width dark band, inverted mark) — four cards with tech tags:
   - **Helpdesk** (PWA): ticketing system, Microsoft work sign-in, live updates + push. Tags: React, Node.js, Entra ID, Web Push, Docker.
   - **Posta Maestro** (Archive): years of PEC/PEO mail rescued from 50 GB Outlook files into one searchable archive, each office sees only its own mail. Tags: PST ingest, Full-text search, Entra ID, vSphere.
   - **Legal Assistant** (badge "In the making"): checks drafts against internal circulars, legal opinions and current Italian law, cites sources; speaks MCP. Tags: MCP server, Normattiva, PDF to Markdown, React.
   - **dflibrary** (Library): library management with notification emails that survive Outlook dark mode. Tags: HTML email, nginx, Dark mode.
5. **About** — "One maker, many benches" + easter egg card: *Simone Lazzari* is an anagram of *Simon Realizza* ("realizza" = "makes it real").
6. **Contact** — big `hello@madebysimon.dev` link.
7. **Footer** (dark) — inverted small mark, © Made by Simon, links madebysimon.dev · GitHub · Instagram.

Rules for copy: don't mention user counts at work. "Ministry of Culture" by name is fine. No internal hostnames, IPs or screenshots of internal tools.

### Open items to confirm with Simon
- dflibrary description (only the email side was known for sure).
- Ultimate Desktop Cleaner app icon is a placeholder.
- GitHub and Instagram URLs (GitHub username may change from `iSimonWeb`).
- Whether work projects get their own detail pages later (design the card component so it can link out).

## Engineering requirements
- Responsive down to 360px wide: nav wraps, grids collapse to one column, no horizontal scroll.
- Semantic HTML, real links/buttons, visible focus styles, `prefers-reduced-motion` respected.
- Light page only for now (dark sections are part of the design, not a theme toggle). Leave tokens structured so a dark theme could be added later.
- Lighthouse 95+ across the board; no client JS unless something needs it.
- Meta: title, description, Open Graph image (1200×630, full positive mark on paper background + wordmark), canonical `https://madebysimon.dev/`.
- `.dev` is on the HSTS preload list: the site only ever works over HTTPS. Never link `http://`.

## Deployment
GitHub Pages with **Source: GitHub Actions**. In `astro.config.mjs` set `site: 'https://madebysimon.dev'` and **no** `base`: the site lives at the domain root, even though the repo is a project repo (its github.io sub-path URL will look broken until the custom domain is on, and that's fine). With a custom Actions workflow, GitHub ignores any `CNAME` file; the custom domain lives in repo Settings → Pages (Simon does that step). Workflow: on push to `main`, build, upload artifact, deploy. Add a `workflow_dispatch` trigger too.

## Suggested first session
1. Scaffold Astro project, tokens, fonts, layout, nav/footer.
2. Port the page section by section from the reference, as components (`MarkFull`, `MarkSmall`, `AppCard`, `WorkCard`, `Tag`...).
3. Add favicon set + OG image.
4. Add the Pages workflow, push, and walk Simon through the Pages setup.
