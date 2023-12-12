import type { I18nFn } from '../createI18nFn/types';
import { ReactNode } from 'react';
import { PlainObject } from 'Interfaces/PlainObject';
import { TranslateType } from '../types';

export interface I18nContext {
	i18n: I18nFn;
	language: string;
	updateEditedTranslations(translations: PlainObject<string> | TranslateType[]): void;
}

export interface I18nProviderProps {
	translations?: TranslateType[];
	children?: ReactNode;
}
