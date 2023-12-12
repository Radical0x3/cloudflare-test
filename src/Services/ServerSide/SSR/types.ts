import type { QueryOptions } from '@apollo/client';
import type { GetServerSidePropsContext, Redirect } from 'next';
import type { PageRoute } from 'Services/PageRoute';
import { PlainObject } from 'Interfaces/PlainObject';
import type { URLSearchService } from 'Services/URLSearch';
import type { ServerData } from '../types';

export interface SSRCommonData {}

export type RedirectResult = { redirect: Redirect };
export type NotFoundResult = { notFound: true };
export type PropsResult<P extends PlainObject> = { props: P } | RedirectResult | NotFoundResult;

export interface SSRPageProps<
	InjectData,
	// Данные, которые нужно запросить на сервере
	QueriedData extends PlainObject | null = null,
	// Переменные с которыми следует выполнить запрос
	QueryVariables extends PlainObject | null = null,
	// Структура данных после нормализации
	NormalizedData extends PlainObject | null = null
> {
	queriedData: QueriedData extends null ? InjectData : QueriedData & InjectData;
	queryVariables: QueryVariables;
	normalizedData: NormalizedData;
	serverData: ServerData;
	statusCode: number;
}

export interface SSRInitProps<
	// Данные, которые нужно запросить на сервере
	QueriedData extends PlainObject | null = null,
	// Переменные с которыми следует выполнить запрос
	QueryVariables extends PlainObject | null = null,
	// Структура данных после нормализации
	NormalizedData extends PlainObject | null = null
> {
	queriedData: QueriedData;
	queryVariables: QueryVariables;
	normalizedData: NormalizedData;
	serverData: ServerData;
	statusCode: number;
}

export interface InitContext {
	context: GetServerSidePropsContext;
	urlParams: URLSearchService;
	locale: string;
}

export interface InitConfig<P extends SSRPageProps<any, any, any>> {
	route: PageRoute;
	queryOptions: P['queriedData'] extends null
		? null
		: (
				initContext: InitContext
		  ) => QueryOptions<P['queryVariables'], P['queriedData']> | RedirectResult | NotFoundResult;
	normalizeData:
		| ((
				data: P['queriedData'],
				variables: P['queryVariables'],
				initContext: InitContext
		  ) => Promise<P['normalizedData'] | RedirectResult | NotFoundResult>)
		| ((
				data: P['queriedData'],
				variables: P['queryVariables'],
				initContext: InitContext
		  ) => P['normalizedData'] | RedirectResult | NotFoundResult)
		| null;
}
