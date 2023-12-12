import { FC } from 'react';
import Head from 'next/head';
import { usePageDataContext } from 'Services/PageData';

export const HTMLHead: FC = (props) => {
	const pageData = usePageDataContext();
	const title = pageData.htmlTitle || 'Lynq Dating';
	const description = pageData.description || 'Lynq Dating';
	const image = pageData.image || `${process.env.NEXT_PUBLIC_APP_URL}/images/og-image.jpg`;

	return (
		<Head>
			<meta charSet={'utf-8'} />
			<meta name={'format-detection'} content={'telephone=no'} />
			<meta name={'MobileOptimized'} content={'360'} />
			<meta name={'apple-mobile-web-app-capable'} content={'yes'} />
			<meta name={'viewport'} content={'width=device-width,initial-scale=1'} />

			<link rel={'apple-touch-icon'} sizes={'180x180'} href={'/favicons/apple-touch-icon.png'} />
			<link rel={'icon'} type={'image/png'} sizes={'32x32'} href="/favicons/favicon-32x32.png" />
			<link rel={'icon'} type={'image/png'} sizes={'16x16'} href="/favicons/favicon-16x16.png" />
			<link rel={'manifest'} href={'/favicons/site.webmanifest'} />
			<link rel={'mask-icon'} href={'/favicons/safari-pinned-tab.svg'} color={'#141414'} />
			<meta name={'msapplication-TileColor'} content={'#da532c'} />
			<meta name={'theme-color'} content={'#ffffff'} />
			<link rel={'icon'} type={'image/x-icon'} href={'/favicons/favicon.ico'} />
			<meta name={'msapplication-config'} content={'/favicons/browserconfig.xml'} />

			<title>{title}</title>
			<meta name={'title'} content={title} />
			<meta name={'description'} content={description} />

			<meta property={'twitter:card'} content={'summary_large_image'} />
			<meta property={'twitter:title'} content={title} />
			<meta property={'twitter:description'} content={description} />
			<meta property={'twitter:image'} content={image} />

			<meta property={'og:type'} content={'website'} />
			<meta property={'og:title'} content={title} />
			<meta property={'og:description'} content={description} />
			<meta property={'og:image'} content={image} />
		</Head>
	);
};
