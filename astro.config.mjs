import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE_URL = 'https://bluemountainreal.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
