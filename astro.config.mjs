// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';
import mdx from '@astrojs/mdx';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [solid({
    include: ['**/solid/*']
  }), react({
    include: ['**/react/*']
  }), mdx()],
  site: 'https://astro-frontend-masters.netlify.app',
  adapter: node({
    mode: "standalone"
  })
});