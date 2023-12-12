import { PlainObject } from 'Interfaces/PlainObject';
import { NotFoundResult, RedirectResult, SSRPageProps, InitContext } from '../SSR';
import { ServerData } from '../types';
import { PageRoute } from 'Services/PageRoute';
import { QueryOptions } from '@apollo/client';

export interface SSRPublicQueryInjectData {}

export interface SSRPublicInitProps<
	QueriedData extends PlainObject | null = null,
	QueryVariables extends PlainObject | null = null,
	NormalizedData extends PlainObject | null = null
> {
	queriedData: QueriedData;
	queryVariables: QueryVariables;
	normalizedData: NormalizedData;
	serverData: ServerData;
	statusCode: number;
}

export type SSRPublicPageProps<
	QueriedData extends PlainObject | null = null,
	QueryVariables extends PlainObject | null = null,
	NormalizedData extends PlainObject | null = null
> = SSRPageProps<SSRPublicQueryInjectData, QueriedData, QueryVariables, NormalizedData>;

export interface InitPublicConfig<P extends SSRPageProps<any, any, any>> {
	route: PageRoute;
	queryOptions: P['queriedData'] extends null
		? null
		: (
				initContext: InitContext
		  ) => QueryOptions<P['queryVariables'], P['queriedData']> | RedirectResult | NotFoundResult;
	normalizeData:
		| ((
				data: P['queriedData'] extends null ? null : P['queriedData'],
				variables: P['queryVariables'],
				initContext: InitContext
		  ) => Promise<P['normalizedData'] | RedirectResult | NotFoundResult>)
		| ((
				data: P['queriedData'] extends null ? null : P['queriedData'],
				variables: P['queryVariables'] extends null ? null : P['queryVariables'],
				initContext: InitContext
		  ) => P['normalizedData'] | RedirectResult | NotFoundResult)
		| null;
}
