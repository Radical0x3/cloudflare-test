import { PlainObject } from 'Interfaces/PlainObject';
import { isPlainObject } from '../guards';

export function asPlainObject<T = PlainObject>(sample: any): T {
	return (isPlainObject(sample) ? sample : {}) as T;
}
