import { PlainObject } from 'Interfaces/PlainObject';

export function isPlainObject<T = any>(sample: unknown): sample is PlainObject<T> {
	return sample !== null && typeof sample === 'object' && Array.isArray(sample) === false;
}
