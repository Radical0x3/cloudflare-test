import { ApolloProvider } from '@apollo/client';
import { nProgressEnd, nProgressStart } from 'Components/NProgressStyle';
import Router, { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import { ApolloService } from 'Services/Apollo';
import { I18nService, I18nProvider } from 'Services/I18n';
import { ServerSideDataProvider } from 'Services/ServerSide';
import { RootThemeProvider, ThemeService } from 'Services/Theme';
import { EnhancedAppProps } from './_app-types';
import { RenderService } from 'Services/Render';

Router.events.on('routeChangeStart', nProgressStart);
Router.events.on('routeChangeComplete', nProgressEnd);
Router.events.on('routeChangeError', nProgressEnd);

let observer: MutationObserver | null = null;

export const runtime = process.env.RUNTIME;

export default function App({ Component: PageComponent, pageProps, emotionCache }: EnhancedAppProps): ReactElement {
	const router = useRouter();
	const language = router.locale || I18nService.DEFAULT_LOCALE;
	const client = ApolloService.getClient({
		router,
		language,
		uri: pageProps.serverData.GRAPHQL_API
	});

	useEffect(() => {
		if (!!observer) {
			observer.disconnect();
			observer = null;
		}
		observer = new window.MutationObserver(function (mutations) {
			mutations.forEach(function (mutation) {
				if (
					mutation.type === 'attributes' &&
					mutation.attributeName === 'lang' &&
					window.document.documentElement.lang !== language
				) {
					window.document.documentElement.lang = language;
				}
			});
		});
		observer.observe(window.document.documentElement, {
			attributes: true
		});
	}, [language]);

	useEffect(() => {
		if (RenderService.IN_DEVELOPMENT_MODE && RenderService.IS_CSR) {
			document.querySelectorAll(ThemeService.SRR_STYLE_SELECTOR).forEach((element) => element.remove());
		}
	}, []);

	useEffect(() => {
		if (RenderService.IS_CSR) {
			window.document.documentElement.classList.remove('_is-ssr');
			window.document.documentElement.classList.add('_is-csr');
		}
	}, []);

	return (
		<ServerSideDataProvider data={pageProps.serverData}>
			<ApolloProvider client={client}>
				<I18nProvider>
					<RootThemeProvider emotionCache={emotionCache}>
						<PageComponent {...pageProps} />
					</RootThemeProvider>
				</I18nProvider>
			</ApolloProvider>
		</ServerSideDataProvider>
	);
}
