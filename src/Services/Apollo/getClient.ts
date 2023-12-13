import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { I18nService } from 'Services/I18n';
import { RenderService } from 'Services/Render';
import { InitApolloClientConfig } from './types';
import { onError } from '@apollo/client/link/error';
import { UtilService } from 'Services/Util';

let __CACHED_CLIENT__: ApolloClient<any> | null = null;
let __CACHED_CLIENT_WS__: ApolloClient<any> | null = null;

const errorLink = onError(({ graphQLErrors, networkError, response }) => {
	if (graphQLErrors) {
		const graphQLError = graphQLErrors[0];
		if (
			response &&
			graphQLError.message &&
			graphQLError.extensions &&
			graphQLError.extensions.category === 'translated'
		) {
			UtilService.methods.notify(graphQLError.message);
			response.errors = undefined;
		}
	}
	if (RenderService.IS_SSR) {
		if (graphQLErrors)
			graphQLErrors.forEach(({ message, locations, path }) =>
				(function (): void {
					console.group('\x1b[31m%s', `[GraphQL error]:`);
					console.log(`Location - ${JSON.stringify(locations)}`);
					console.log(`Message- ${message}`);
					console.log(`Path- ${path}`);
					console.log('\x1b[0m', '-------------------------------');
					console.groupEnd();
				})()
			);

		if (networkError) console.log(`[Network error]: ${networkError}`);
	}
});

const createClient = ({ uri, context, language, router }: InitApolloClientConfig): ApolloClient<any> => {
	const client = new ApolloClient({
		ssrMode: typeof window === 'undefined',
		cache: new InMemoryCache(),
		defaultOptions: {
			watchQuery: {
				fetchPolicy: 'no-cache'
			},
			query: {
				fetchPolicy: 'no-cache'
			},
			mutate: {
				fetchPolicy: 'no-cache'
			}
		}
	});

	client.setLink(
		ApolloLink.from([
			errorLink,
			createUploadLink({
				uri,
				fetch,
				credentials: 'same-origin',
				headers: {
					'Accept-Language': language || I18nService.DEFAULT_LOCALE,
					Timezone: UtilService.methods.getTimeZone()
				}
			})
		])
	);

	__CACHED_CLIENT__ = client;
	return client;
};

export const getClient = (config: InitApolloClientConfig): ApolloClient<any> => {
	if (RenderService.IS_SSR) {
		return createClient(config);
	}
	if (config?.uriWs) {
		return __CACHED_CLIENT_WS__ instanceof ApolloClient ? __CACHED_CLIENT_WS__ : createClient(config);
	}
	return __CACHED_CLIENT__ instanceof ApolloClient ? __CACHED_CLIENT__ : createClient(config);
};

export const dropCachedClient = (): void => {
	__CACHED_CLIENT__ = null;
	__CACHED_CLIENT_WS__ = null;
};
