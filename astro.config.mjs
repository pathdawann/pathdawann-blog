// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pathdawann.vercel.app', // <- ¡Tu dominio real aquí!
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});