import { createTheme, Shadows } from '@mui/material/styles';
import { alpha, darken, lighten } from '@mui/system';
import { breakpointValues, spacingValues } from './settings';
import { PaletteActionColorOptions, PaletteStatusColorOptions, Theme, ThemeOptions } from './types';
import { PaletteColor as MuiPaletteColor } from '@mui/material/styles/createPalette';

export const _createMainColors = (mainColor: string, contrastColor: string): MuiPaletteColor => ({
	main: mainColor,
	light: lighten(mainColor, 0.3),
	dark: darken(mainColor, 0.3),
	contrastText: contrastColor
});

export const _createActionColors = (mainColor: string): PaletteActionColorOptions => ({
	containedHoverBackground: darken(mainColor, 0.3),
	outlinedHoverBackground: alpha(mainColor, 0.08),
	outlinedRestingBorder: alpha(mainColor, 0.5)
});

export const _createStatusColors = (mainColor: string): PaletteStatusColorOptions => ({
	..._createActionColors(mainColor),
	alertContent: darken(mainColor, 0.6),
	alertBackground: lighten(mainColor, 0.9)
});

export const _createShadows = (list: string[]): Shadows => {
	return Array.from({ length: 25 }, (item, index) => (list[index - 1] ? list[index - 1] : 'none')) as Shadows;
};

export const _createTheme = (options?: ThemeOptions): Theme => createTheme(options) as Theme;
export const _coreThemeParams: ThemeOptions = {
	__name: 'base',
	typography: {
		fontFamily: 'Inter, sans-serif',
		h1: {
			fontSize: '40px',
			lineHeight: 1,
			fontWeight: 900,
			[`@media (min-width: ${breakpointValues.lg}px)`]: {
				fontSize: '70px'
			}
		},
		h2: {
			fontSize: '32px',
			lineHeight: 1.2,
			fontWeight: 700,
			[`@media (min-width: ${breakpointValues.lg}px)`]: {
				fontSize: '52px'
			}
		},
		h3: {
			fontSize: '24px',
			lineHeight: 1.2,
			fontWeight: 700,
			[`@media (min-width: ${breakpointValues.md}px)`]: {
				fontSize: '40px'
			}
		},
		h4: {
			fontSize: '20px',
			lineHeight: 1.4,
			fontWeight: 700,
			[`@media (min-width: ${breakpointValues.md}px)`]: {
				fontSize: '24px'
			}
		},
		h5: {
			fontSize: '14px',
			lineHeight: 1.6,
			fontWeight: 700
		},
		subtitle1: {
			fontSize: '16px',
			lineHeight: 1.4,
			[`@media (min-width: ${breakpointValues.md}px)`]: {
				fontSize: '24px'
			}
		},
		body1: {
			fontSize: '16px',
			lineHeight: 1.6
		},
		body2: {
			fontSize: '12px',
			lineHeight: 1.4
		}
	},
	breakpoints: {
		values: breakpointValues
	},
	shape: {
		borderRadius: 10
	},
	spacing: spacingValues,
	shadows: [
		..._createShadows([
			'0 6px 16px rgba(0, 0, 0, 0.1)', // 1
			'0px 20px 50px 0px rgba(55, 3, 112, 0.50)' // 2
		])
	]
};
