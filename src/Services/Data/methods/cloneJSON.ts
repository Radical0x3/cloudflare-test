import { PlainObject } from 'Interfaces/PlainObject';

export function cloneJSON<T = PlainObject>(value: T, replacer?: (this: any, key: string, value: any) => any): T {
	return JSON.parse(JSON.stringify(value, replacer)) as T;
}
