// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  server: {
      host: true,
      port: 4321,
  },

  devToolbar: {
      enabled: false
  },

  site: "https://zhblog.org",
  integrations: [sitemap()],
});