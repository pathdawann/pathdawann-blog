import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  site: 'https://pathdawann.vercel.app',
  integrations: [mdx(), sitemap(), react(), keystatic(), markdoc()],
  vite: {
    plugins: [tailwindcss()],
  },
});