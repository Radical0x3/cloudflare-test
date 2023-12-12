import { PlainObject } from 'Interfaces/PlainObject';

export function hasOwn<T extends PlainObject>(obj: T, key: string | number | symbol): key is keyof T {
	return Object.prototype.hasOwnProperty.call(obj, key);
}
