import { NextReqResContext } from 'Interfaces/NextContext';
import type { NextRouter } from 'next/router';

export interface InitApolloClientConfig {
	uri: string;
	uriWs?: string;
	router?: NextRouter;
	language?: string;
	context?: NextReqResContext;
}
