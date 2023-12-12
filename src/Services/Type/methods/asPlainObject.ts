import { isPlainObject } from '../guards';
import { PlainObject } from 'Interfaces/PlainObject';

export function asPlainObject<T = PlainObject>(sample: unknown): T | null {
	return isPlainObject(sample) ? (sample as T) : null;
}
