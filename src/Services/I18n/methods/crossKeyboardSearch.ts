import { crossKeyboardValues } from './crossKeyboardValues';

export function crossKeyboardSearch(value?: string, search?: string, insensitive?: boolean): boolean {
	if (typeof value === 'string' && typeof search === 'string') {
		return crossKeyboardValues(search).some((variant) => {
			if (insensitive) {
				return value.toLowerCase().includes(variant.toLowerCase()) === true;
			} else {
				return value.includes(variant) === true;
			}
		});
	} else {
		return false;
	}
}
