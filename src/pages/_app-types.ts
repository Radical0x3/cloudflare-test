import type { EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';
import { AppContextType, AppPropsType, NextComponentType } from 'next/dist/shared/lib/utils';
import { SSRPageProps, SSRPublicQueryInjectData } from 'Services/ServerSide';
import { PlainObject } from 'Interfaces/PlainObject';

interface PageProps extends SSRPageProps<any, any, any> {
	queriedData: SSRPublicQueryInjectData & PlainObject;
}

export interface EnhancedAppProps extends AppProps<PageProps> {
	pageProps: PageProps;
	emotionCache?: EmotionCache;
}

export type EnhancedAppType = NextComponentType<AppContextType, any, AppPropsType & { emotionCache?: EmotionCache }>;
