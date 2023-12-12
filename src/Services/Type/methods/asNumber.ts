/**
 * @param value
 * @param min
 * @param max
 * @autodocSpec __specs__/asNumber.spec.ts
 */
export function asNumber(value: unknown, min?: number, max?: number): number | null {
	if (
		typeof value === 'number' ||
		(typeof value === 'string' && value.length > 0) ||
		(typeof value === 'object' && value instanceof Number)
	) {
		const number = Number(value);
		if (Number.isFinite(number)) {
			if (min !== undefined && number < min) {
				return min;
			}
			if (max !== undefined && number > max) {
				return max;
			}
			return number;
		}
	}
	return null;
}
