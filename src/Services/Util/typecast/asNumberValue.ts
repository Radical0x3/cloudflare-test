export function asNumberValue(value: any, fallback: number, min?: number, max?: number): number {
	const sample = (typeof value === 'string' && value.length > 0) || typeof value === 'number' ? Number(value) : NaN;
	const number = Number.isFinite(sample) ? sample : fallback;
	if (min !== undefined && number < min) {
		return min;
	}
	if (max !== undefined && number > max) {
		return max;
	}
	return number;
}
