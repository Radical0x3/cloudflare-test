import { createContext } from 'react';
import type { I18nContext } from './types';
import { DEFAULT_LOCALE } from '../constants';

export const Context = createContext<I18nContext>({
	language: DEFAULT_LOCALE,
	i18n: (p: string): string => p,
	updateEditedTranslations: (): void => undefined
});
