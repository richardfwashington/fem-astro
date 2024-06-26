// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	output: 'hybrid',
	integrations: [
		solid({
			include: ['**/solid/*'],
		}),
		react({
			include: ['**/react/*'],
		}),
		mdx(),
	],
	site: 'https://fem-astro-tau.vercel.app',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
		maxDuration: 8,
	}),
	prefetch: true,
	image: {
		domains: ['images.unsplash.com'],
	},
});
