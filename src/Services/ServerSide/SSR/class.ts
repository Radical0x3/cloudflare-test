import { DocumentNode, QueryOptions } from '@apollo/client';
import { GetServerSidePropsContext } from 'next';
import { ApolloService } from 'Services/Apollo';
import { DataService } from 'Services/Data';
import { DevToolService } from 'Services/DevTool';
import { GQLService } from 'Services/GQL';
import { I18nService } from 'Services/I18n';
import { PageRoute } from 'Services/PageRoute';
import { RenderService } from 'Services/Render';
import { PlainObject } from 'Interfaces/PlainObject';
import { URLSearchService } from 'Services/URLSearch';
import { ServerData } from '../types';
import { InitConfig, InitContext, NotFoundResult, PropsResult, RedirectResult, SSRInitProps } from './types';

export abstract class SSR<P extends SSRInitProps<any, any, any>, InjectedData> {
	protected _name = 'SSR';

	protected _route: PageRoute;

	protected _queryOptions: P['queriedData'] extends null
		? null
		: (
				initContext: InitContext
		  ) => QueryOptions<P['queryVariables'], P['queriedData']> | RedirectResult | NotFoundResult;

	protected _normalizeData:
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

	protected readonly serverData: ServerData = {
		GRAPHQL_API: process.env.GRAPHQL_API
	};

	static readonly NOT_FOUND_RESULT: NotFoundResult = { notFound: true };

	constructor(config: InitConfig<P>) {
		this._route = config.route;
		this._queryOptions = config.queryOptions;
		this._normalizeData = config.normalizeData;
	}

	protected getInitContext(context: GetServerSidePropsContext): InitContext {
		return {
			context,
			urlParams: new URLSearchService(context.query),
			locale: context.locale || I18nService.DEFAULT_LOCALE
		};
	}

	protected getInjectingQuery(initContext: InitContext): { query: DocumentNode; variables: PlainObject } | null {
		return null;
	}

	protected getInjectedData(
		queriedData: P['queriedData'],
		variables: P['queryVariables'],
		initContext: InitContext
	): InjectedData | RedirectResult | NotFoundResult {
		return {} as InjectedData;
	}

	protected getQueryOptions(initContext: InitContext): QueryOptions | null | NotFoundResult | RedirectResult {
		const injectingQuery = this.getInjectingQuery(initContext);
		if (this._queryOptions) {
			const options = this._queryOptions(initContext);
			if (SSR.isRejectedResult(options)) {
				return options;
			}
			if (injectingQuery) {
				options.query = GQLService.mergeQueries(options.query, injectingQuery.query);
				options.variables = {
					...(options.variables || {}),
					...injectingQuery.variables
				};
			}
			return options;
		}
		return injectingQuery;
	}

	protected async getQueryData(
		initContext: InitContext,
		options: QueryOptions | null
	): Promise<P['queriedData'] | RedirectResult | NotFoundResult | null> {
		if (options) {
			const apolloClient = ApolloService.getClient({
				uri: this.serverData.GRAPHQL_API,
				language: initContext.locale,
				context: initContext.context
			});
			return apolloClient
				.query<P['queriedData'], P['queryVariables']>(options)
				.then((data) => (data && data.data ? data.data : null))
				.catch((error) => {
					console.log(error);
					if (RenderService.IN_DEVELOPMENT_MODE) {
						throw new Error(error);
					} else {
						return null;
					}
				});
		} else {
			return Promise.resolve(null);
		}
	}

	protected async getNormalizedData(
		queriedData: P['queriedData'],
		variables: P['queryVariables'],
		initContext: InitContext
	): Promise<P['normalizedData'] | P['queriedData'] | RedirectResult | NotFoundResult> {
		if (queriedData != null && this._normalizeData) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return await this._normalizeData(queriedData, variables, initContext);
		} else {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return queriedData;
		}
	}

	protected async checkAccess(initContext: InitContext): Promise<void | RedirectResult | NotFoundResult> {
		return Promise.resolve();
	}

	getServerSideProps = async (context: GetServerSidePropsContext): Promise<PropsResult<P>> => {
		const initContext = this.getInitContext(context);
		const accessResult = await this.checkAccess(initContext);
		if (SSR.isRejectedResult(accessResult)) {
			this.logRejectedBy('checkAccess');
			return accessResult;
		} else {
			const options = this.getQueryOptions(initContext);
			if (SSR.isRejectedResult(options)) {
				this.logRejectedBy('getQueryOptions');
				return options;
			} else {
				const queryVariables = (options && options.variables) ?? {};
				const queriedData = await this.getQueryData(initContext, options);
				if (SSR.isRejectedResult(queriedData)) {
					this.logRejectedBy('getQueryData');
					return queriedData;
				} else {
					if (queriedData == null) {
						return {
							props: {
								queriedData: {},
								queryVariables: {},
								normalizedData: {},
								serverData: this.serverData,
								statusCode: initContext.context.res.statusCode
							} as P
						};
					} else {
						const injectedData = this.getInjectedData(queriedData, queryVariables, initContext);
						if (SSR.isRejectedResult(injectedData)) {
							this.logRejectedBy('getInjectedData');
							return injectedData;
						} else {
							const data = { ...queriedData, ...injectedData };
							const normalizedData = await this.getNormalizedData(data, queryVariables, initContext);
							if (SSR.isRejectedResult(normalizedData)) {
								this.logRejectedBy('getNormalizedData');
								return normalizedData;
							} else {
								return {
									props: {
										queriedData: data,
										queryVariables,
										normalizedData,
										serverData: this.serverData,
										statusCode: initContext.context.res.statusCode
									} as P
								};
							}
						}
					}
				}
			}
		}
	};

	logRejectedBy(method: string): void {
		DevToolService.console.warn(`[${this._name}] Route access was rejected by the \`${method}\` method!`);
	}

	static isRejectedResult<T = any>(
		sample: T | RedirectResult | NotFoundResult
	): sample is RedirectResult | NotFoundResult {
		return sample != null && (DataService.hasOwn(sample, 'redirect') || DataService.hasOwn(sample, 'notFound'));
	}
}
