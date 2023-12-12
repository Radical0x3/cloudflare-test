import createEmotionServer from '@emotion/server/create-instance';
import { NProgressStyle } from 'Components/NProgressStyle';
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import React, { ReactElement } from 'react';
import { DataService } from 'Services/Data';
import { I18nService } from 'Services/I18n';
import { createEmotionCache } from 'Services/Theme';
import { EnhancedAppType } from './_app-types';

export default class MyDocument extends Document {
	render(): ReactElement {
		return (
			<Html lang={this.lang} className={'_is-ssr'}>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<NProgressStyle />
				</body>
			</Html>
		);
	}

	get lang(): string {
		return this.props.locale || I18nService.DEFAULT_LOCALE;
	}

	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const originalRenderPage = ctx.renderPage;
		const cache = createEmotionCache();
		const { extractCriticalToChunks } = createEmotionServer(cache);

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App: EnhancedAppType) =>
					function EnhanceApp(props) {
						return <App emotionCache={cache} {...props} />;
					}
			});

		const initialProps = await Document.getInitialProps(ctx);
		const styles = initialProps.styles;
		const emotionStyles = extractCriticalToChunks(initialProps.html);
		const emotionStyleTags = emotionStyles.styles.map((style) => (
			<style
				key={style.key}
				data-emotion={`${style.key} ${style.ids.join(' ')}`}
				dangerouslySetInnerHTML={{ __html: style.css }}
			/>
		));

		function _arrayLike(styles: typeof initialProps.styles): styles is React.ReactElement[] {
			return styles !== undefined && DataService.hasOwn(styles, 'length');
		}

		return {
			...initialProps,
			styles: [...(_arrayLike(styles) ? styles : [styles]), ...emotionStyleTags]
		};
	}
}
