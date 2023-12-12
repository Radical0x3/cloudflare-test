import { TranslationsData } from './types';
import { I18nService } from 'Services/I18n';
import { arrayFilterNullable } from '@wezom/toolkit-array-cjs';
import { DataService } from 'Services/Data';

export const transformTranslations = (data?: (TranslationsData | null)[] | null): TranslationsData[] => {
	const items = DataService.cleanTypeNames(arrayFilterNullable<TranslationsData>(data));

	return I18nService.LOCALES.map((language) => ({
		...(items.find((item) => item.language === language) || {}),
		language
	}));
};
