import { PrimitiveValue } from 'Interfaces/PrimitiveValue';

export const isPrimitiveValue = (value: any): value is PrimitiveValue =>
	typeof value === 'string' ||
	typeof value === 'number' ||
	typeof value === 'boolean' ||
	typeof value === 'undefined' ||
	value === null;
