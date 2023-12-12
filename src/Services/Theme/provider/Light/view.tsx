import { FC, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightColorTheme } from '../../themes';

export const LightThemeProvider: FC<{ children?: ReactNode }> = ({ children }) => {
	return <ThemeProvider theme={lightColorTheme}>{children}</ThemeProvider>;
};
