import type { PrimitiveValue } from '../types';

export const isPrimitiveValue = (value: unknown): value is PrimitiveValue =>
	typeof value === 'string' ||
	typeof value === 'number' ||
	typeof value === 'boolean' ||
	typeof value === 'undefined' ||
	value === null;
