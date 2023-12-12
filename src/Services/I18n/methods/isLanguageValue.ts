import { DEFAULT_LOCALE } from '../constants';

export function isLanguageValue(value: any): value is string {
	return value === DEFAULT_LOCALE;
}
