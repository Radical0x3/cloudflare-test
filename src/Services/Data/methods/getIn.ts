import get from 'lodash.get';
import { PlainObject } from 'Interfaces/PlainObject';

export function getIn<T, O = PlainObject<T>>(obj: O, path: string | string[], defaultValue?: T): T {
	return get(obj, path, defaultValue) as T;
}
