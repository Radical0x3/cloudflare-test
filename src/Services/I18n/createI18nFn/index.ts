import { PlainObject } from 'Interfaces/PlainObject';
import { TKey } from '../generated';
import { I18nFn } from './types';
import { TranslateType } from '../types';

export default function createI18nFn(translations: PlainObject<string> | TranslateType[]): {
	i18n: I18nFn;
	updateDB(translations: PlainObject<string> | TranslateType[]): void;
} {
	const update = (translations: PlainObject<string> | TranslateType[] = []): PlainObject<string> =>
		Array.isArray(translations)
			? translations.reduce<PlainObject<string>>((acc, { key, text }) => {
					if (typeof text === 'string') {
						acc[key] = text;
					}
					return acc;
			  }, {})
			: {};

	const cache = {
		db: Array.isArray(translations) ? update(translations) : translations
	};

	return {
		i18n: (tKey: TKey | string, values: PlainObject = {}): string => {
			if (cache.db.hasOwnProperty(tKey)) {
				let text = cache.db[tKey as keyof typeof cache.db];
				let prop: keyof typeof values;
				for (prop in values) {
					if (values.hasOwnProperty(prop)) {
						const regexp = new RegExp(`:${prop}`, 'g');
						text = text.replace(regexp, String(values[prop]));
					}
				}
				return text;
			} else {
				return tKey;
			}
		},
		updateDB: (translations: PlainObject<string> | TranslateType[]): void => {
			cache.db = update(translations);
		}
	};
}
