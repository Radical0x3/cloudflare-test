import { dropCachedClient, getClient } from './getClient';

export type { InitApolloClientConfig } from './types';
export const ApolloService = {
	getClient,
	dropCachedClient
};
