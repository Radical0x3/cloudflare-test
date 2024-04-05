import type { EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';
import { AppContextType, AppPropsType, NextComponentType } from 'next/dist/shared/lib/utils';
import { PlainObject } from 'Interfaces/PlainObject';

export interface EnhancedAppProps extends AppProps {
	pageProps: PlainObject;
	emotionCache?: EmotionCache;
}

export type EnhancedAppType = NextComponentType<AppContextType, any, AppPropsType & { emotionCache?: EmotionCache }>;
