import * as I18nService from './index-all';
import { I18nProvider } from './provider/provider';
import { useI18n, useLanguage, useUpdateEditedTranslations } from './provider/hooks';
import { I18nFn } from './createI18nFn/types';

export { I18nService, I18nProvider, useI18n, useLanguage, useUpdateEditedTranslations };
export type { I18nFn };

export * from './types';
