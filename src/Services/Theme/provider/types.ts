import type { EmotionCache } from '@emotion/react';
import { ReactNode } from 'react';

export interface RootThemeProviderProps {
	emotionCache?: EmotionCache;
	children?: ReactNode;
}
