import { PlainObject } from 'Interfaces/PlainObject';
import get from 'lodash.get';

export function getIn<T, O = PlainObject>(obj: O, path: string | string[], defaultValue?: T): T {
	return get(obj, path, defaultValue) as T;
}
