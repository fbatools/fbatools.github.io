// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { visit } from 'unist-util-visit';

function autoDatePlugin() {
  return (tree) => {
    const currentYear = new Date().getFullYear().toString();
    visit(tree, 'text', (node) => {
      // Replace hardcoded 2026 with the current year so content always stays fresh
      node.value = node.value.replace(/2026/g, currentYear);
    });
  };
}

// https://astro.build/config
export default defineConfig({
	site: 'https://fbatools.github.io',
	markdown: {
		remarkPlugins: [autoDatePlugin],
	},
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
