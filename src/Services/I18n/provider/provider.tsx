import { FC, ReactElement, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Context } from './context';
import { I18nContext, I18nProviderProps } from './types';
import createI18nFn from '../createI18nFn';
import { DEFAULT_LOCALE } from '../constants';
import { PlainObject } from 'Interfaces/PlainObject';
import { EN } from '../generated/en';
import { TranslateType } from '../types';

export const I18nProvider: FC<I18nProviderProps> = ({ children, translations }): ReactElement => {
	const { locale } = useRouter();
	const language = locale || DEFAULT_LOCALE;
	const [, setUpdateCount] = useState(0);

	const providerValue = useMemo((): I18nContext => {
		const { i18n, updateDB } = createI18nFn(translations || EN);
		return {
			language,
			i18n,
			updateEditedTranslations: (translations: PlainObject<string> | TranslateType[]): void => {
				updateDB(translations);
				setUpdateCount((prev) => ++prev);
			}
		};
	}, [language, translations]);

	return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};
