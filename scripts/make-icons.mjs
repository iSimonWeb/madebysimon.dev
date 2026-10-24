// Renders the favicon set and the Open Graph image into public/.
// Run with `npm run icons` after changing the mark. The outputs are committed.
import { copyFile, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';
import { chromium } from 'playwright-core';

const root = new URL('..', import.meta.url);
const at = (path) => fileURLToPath(new URL(path, root));

const INK = '#2b2c30';
const ACCENT = '#c8f03c';
const PAPER = '#f4f4f1';
const S_PATH = (await readFile(at('brand/mark-128-positive.svg'), 'utf8')).match(/ d="([^"]+)"/)[1];

// Same curve as MarkSmall: the frame gets 1px thicker below 128px.
const scaleFor = (size) => (size >= 128 ? 1 : 1 - 2.72 / size);

/** The text-free mark at `size` px. `fullBleed` drops the rounded corners for platforms that mask their own. */
function markSvg(size, { fullBleed = false } = {}) {
  const s = scaleFor(size);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 128 128">
  <rect width="128" height="128" rx="${fullBleed ? 0 : 20}" fill="${INK}"/>
  <path transform="translate(64 64) scale(${s}) translate(-64 -64) translate(-321.04 -476)" d="${S_PATH}" fill="${ACCENT}"/>
</svg>`;
}

const png = (svg, size) =>
  sharp(Buffer.from(svg), { density: 72 * 4 })
    .resize(size, size)
    .png()
    .toBuffer();

/** An .ico is a small directory followed by the PNGs themselves. */
function ico(images) {
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, data }, i) => {
    const entry = 6 + 16 * i;
    header.writeUInt8(size, entry); // 256 would be written as 0
    header.writeUInt8(size, entry + 1);
    header.writeUInt16LE(1, entry + 4); // colour planes
    header.writeUInt16LE(32, entry + 6); // bits per pixel
    header.writeUInt32LE(data.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...images.map((image) => image.data)]);
}

await copyFile(at('brand/favicon.svg'), at('public/favicon.svg'));

const icoSizes = [16, 32, 48];
const icoImages = await Promise.all(
  icoSizes.map(async (size) => ({ size, data: await png(markSvg(size), size) })),
);
await writeFile(at('public/favicon.ico'), ico(icoImages));

await writeFile(
  at('public/apple-touch-icon.png'),
  await png(markSvg(180, { fullBleed: true }), 180),
);

// The OG image needs the tile's live text in the brand fonts, so a browser renders it.
const font = (pkg, file) =>
  pathToFileURL(at(`node_modules/@fontsource-variable/${pkg}/files/${file}`)).href;
const markFull = await readFile(at('brand/mark-full-positive.svg'), 'utf8');
const ogHtml = `<!doctype html><meta charset="utf-8"><style>
  @font-face { font-family: 'Space Grotesk'; font-weight: 300 700; src: url(${font('space-grotesk', 'space-grotesk-latin-wght-normal.woff2')}); }
  @font-face { font-family: 'Red Hat Mono'; font-weight: 300 700; src: url(${font('red-hat-mono', 'red-hat-mono-latin-wght-normal.woff2')}); }
  html, body { margin: 0; width: 1200px; height: 630px; background: ${PAPER}; color: #121316; }
  body { display: flex; align-items: center; gap: 72px; padding: 0 96px; box-sizing: border-box; font-family: 'Space Grotesk'; }
  svg { width: 400px; height: 400px; flex: none; }
  .wordmark { font: 700 64px/1 'Red Hat Mono'; letter-spacing: -0.02em; }
  .line { margin-top: 28px; font-size: 44px; font-weight: 700; letter-spacing: -0.03em; line-height: 1.05; }
  .url { margin-top: 36px; font: 600 24px 'Red Hat Mono'; color: #55565b; }
</style>
${markFull}
<div><div class="wordmark">madebysim0n</div><div class="line">Small, solid software.</div><div class="url">madebysimon.dev</div></div>`;

// Loaded from a file rather than setContent, so the file:// font URLs are same-origin.
const ogPage = at('scripts/.og.html');
await writeFile(ogPage, ogHtml);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(pathToFileURL(ogPage).href);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: at('public/og.png') });
await browser.close();
await rm(ogPage);

console.log('Wrote favicon.svg, favicon.ico, apple-touch-icon.png and og.png to public/');
