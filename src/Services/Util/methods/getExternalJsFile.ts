import { PlainObject } from 'Interfaces/PlainObject';

const _cache: Record<
	string,
	{
		successData?: any[];
		errorData?: any[];
		queue: any[];
	}
> = {};

// Client Side Render only
export const getExternalJsFile = (src: string, queryData: PlainObject = {}): Promise<any> => {
	return new Promise((resolve, reject) => {
		let source = _cache[src] || {};
		if (source.successData) {
			return resolve(...(source.successData as [any]));
		}
		if (source.errorData) {
			// eslint-disable-next-line prefer-promise-reject-errors
			return reject(...source.errorData);
		}
		if (source.queue) {
			return source.queue.push({ resolve, reject });
		}

		source = _cache[src] = {
			queue: []
		};
		const query = [];
		for (const key in queryData) {
			if (queryData.hasOwnProperty(key)) {
				query.push(key + '=' + queryData[key]);
			}
		}

		const script = document.createElement('script');
		script.onerror = function (...args: any[]): void {
			source.errorData = args;
			source.queue.unshift({ reject });
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			source.queue.forEach(({ reject }): any => reject(...args));
		};
		script.onload = function (...args: any[]): void {
			source.successData = args;
			source.queue.unshift({ resolve });
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			source.queue.forEach(({ resolve }): any => resolve(...args));
		};
		script.src = src;
		document.head.appendChild(script);
	});
};
