import { PlainObject } from 'Interfaces/PlainObject';

export function cloneJsonObj<T = PlainObject>(value: T): T {
	return JSON.parse(JSON.stringify(value)) as T;
}
