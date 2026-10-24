// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Served from the domain root, so no `base`, even though the repo is a project repo.
  site: 'https://madebysimon.dev',
  // Dev and preview listen on every interface, so phones on the LAN can open them.
  server: { host: true },
  vite: {
    plugins: [tailwindcss()],
  },
});
