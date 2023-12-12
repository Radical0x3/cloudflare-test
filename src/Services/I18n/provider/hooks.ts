import { useContext } from 'react';
import { Context } from './context';
import { I18nFn } from '../createI18nFn/types';
import { TranslateType } from '../types';

export const useI18n = (): I18nFn => useContext(Context).i18n;
export const useLanguage = (): string => useContext(Context).language;
export const useUpdateEditedTranslations = (): ((translations: TranslateType[]) => void) =>
	useContext(Context).updateEditedTranslations;
