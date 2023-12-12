import { PlainObject } from 'Interfaces/PlainObject';
import { isPlainObject } from '../guards';

type ConfigValue<T> = any | ((key: keyof T | string) => any);

export interface NormalizeConfig<T extends PlainObject> {
	emptyArray?: ConfigValue<T>;
	emptyString?: ConfigValue<T>;
	null?: ConfigValue<T>;
	void?: ConfigValue<T>;
}

const NO_FALLBACK = '-~==NO_FALLBACK==~-';

export function normalizeObject<T extends PlainObject, R = T>(sample: T, config: NormalizeConfig<T> = {}): R {
	const normalized: PlainObject = {};
	const setValue = (key: string | number | symbol, fallback: any): void => {
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		const remove = normalizeObject.REMOVE;
		const k = key as keyof PlainObject;
		if (fallback !== remove) {
			if (typeof fallback === 'function') {
				const result = fallback(key);
				if (result !== remove) {
					normalized[k] = result;
				}
			} else {
				normalized[k] = fallback;
			}
		}
	};
	const getFallback = (key: keyof NormalizeConfig<any>): any => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return Object.prototype.hasOwnProperty.call(config, key) ? config[key] : NO_FALLBACK;
	};

	const emptyArrayFallback = getFallback('emptyArray');
	const emptyStringFallback = getFallback('emptyString');
	const nullableFallback = getFallback('null');
	const voidFallback = getFallback('void');

	if (isPlainObject(sample)) {
		let key: keyof typeof sample;
		for (key in sample) {
			const k = key as keyof PlainObject;
			const value = sample[key];
			if (Array.isArray(value) && value.length === 0 && emptyArrayFallback !== NO_FALLBACK) {
				setValue(key, emptyArrayFallback);
			} else if (typeof value === 'string' && value.length === 0 && emptyStringFallback !== NO_FALLBACK) {
				setValue(key, emptyStringFallback);
			} else if (value === null && nullableFallback !== NO_FALLBACK) {
				setValue(key, nullableFallback);
			} else if (value === undefined && voidFallback !== NO_FALLBACK) {
				setValue(key, voidFallback);
			} else {
				normalized[k] = value;
			}
		}
	} else {
		console.warn('normalizeObject: `sample` is not an Object!');
	}
	return normalized as unknown as R;
}

normalizeObject.REMOVE = '-~=REMOVE=~-';
