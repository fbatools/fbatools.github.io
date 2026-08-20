// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	redirects: {
		'/go/helium10-diamond-annual': 'https://i.helium10.com/c/2597501/3856883/37271',
		'/go/helium10-platinum-annual': 'https://i.helium10.com/c/2597501/3275421/37271',
		'/go/helium10-diamond-6mo': 'https://i.helium10.com/c/2597501/3743709/37271',
		'/go/helium10-platinum-6mo': 'https://i.helium10.com/c/2597501/3743709/37271',
		'/go/helium10-lifetime': 'https://i.helium10.com/c/2597501/3743709/37271',
		'/go/smartscout': 'https://smartscout.com/?fpr=prosun',
		'/go/amzscout': 'https://amzscout.idevaffiliate.com/idevaffiliate.php?id=2435'
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
