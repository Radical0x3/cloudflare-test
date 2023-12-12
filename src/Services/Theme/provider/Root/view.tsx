import { FC } from 'react';
import { CacheProvider } from '@emotion/react';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';
import { lightColorTheme } from '../../themes';
import { createEmotionCache } from './createEmotionCache';
import { RootThemeProviderProps } from '../types';
import _globalStyles from './global-styles';

const clientSideEmotionCache = createEmotionCache();
export const RootThemeProvider: FC<RootThemeProviderProps> = ({ children, emotionCache = clientSideEmotionCache }) => {
	return (
		<CacheProvider value={emotionCache || clientSideEmotionCache}>
			<ThemeProvider theme={lightColorTheme}>
				<GlobalStyles styles={_globalStyles(lightColorTheme)} />
				{children}
			</ThemeProvider>
		</CacheProvider>
	);
};
