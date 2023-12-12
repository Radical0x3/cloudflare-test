import { asNumberValue } from './asNumberValue';

export function asOptionalNumberValue(
	value: any,
	fallback = -1,
	min?: number,
	max?: number,
	noFallbackResult = true
): undefined | number {
	if (value != null) {
		const number = asNumberValue(value, fallback, min, max);
		if (noFallbackResult && number === fallback) {
			return undefined;
		} else {
			return number;
		}
	}
}
