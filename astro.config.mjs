// astro.config.mjs
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import solid from '@astrojs/solid-js';

import mdx from '@astrojs/mdx';

export default defineConfig({
	integrations: [
		solid({
			include: ['**/solid/*'],
		}),
		react({
			include: ['**/react/*'],
		}),
		mdx(),
	],
});
