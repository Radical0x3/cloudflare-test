import { PlainObject } from 'Interfaces/PlainObject';
import { PageRouteInit } from './types';

export class PageRoute<Params extends PlainObject<number | string> = PlainObject<number | string>> {
	public pathname = '/';

	constructor(init: PageRouteInit = {}) {
		if (init.pathname !== undefined) this.pathname = init.pathname;
	}

	public asPath(params?: Params): string {
		const paramsList = params ? Object.entries(params) : [];
		if (paramsList.length) {
			return paramsList.reduce<string>((pathname, [key, value = '']) => {
				return pathname.replaceAll(`[${key}]`, String(value));
			}, this.pathname);
		}
		return this.pathname;
	}
}
