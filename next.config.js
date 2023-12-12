const fromCWD = require('from-cwd');

/** Next.js config
 * @see {@link https://nextjs.org/docs/api-reference/next.config.js/introduction}
 * @return {import('next').NextConfig}
 */
module.exports = () => {
	return {
		pageExtensions: [
			'page.ts',
			'page.tsx',
			process.env.NEXT_PUBLIC_ENABLE_DEV_PAGES === '1' ? 'page-dev.ts' : null,
			process.env.NEXT_PUBLIC_ENABLE_DEV_PAGES === '1' ? 'page-dev.tsx' : null
		].filter(Boolean),
		i18n: {
			locales: process.env.NEXT_PUBLIC_I18N_LOCALES.split(','),
			defaultLocale: process.env.NEXT_PUBLIC_I18N_DEFAULT_LOCALE,
			localeDetection: false
		},
		sassOptions: {
			includePaths: ['./node_modules']
		},
		optimizeFonts: false,
		images: {
			unoptimized: true
		},
		experimental: {
			largePageDataBytes: 128 * 100000,
			experimental: {
				runtime: 'edge'
			}
		},
		headers: async () => [
			{
				source: '/(fonts|images)/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=86400'
					}
				]
			}
		],
		webpack: (config) => {
			const srcFolder = fromCWD('./src/');
			config.resolve.modules.push(srcFolder);

			return config;
		}
	};
};
