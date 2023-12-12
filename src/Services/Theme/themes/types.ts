import type {
	Palette as MuiPalette,
	PaletteColor as MuiPaletteColor,
	PaletteColorOptions as MuiPaletteColorOptions,
	PaletteOptions as MuiPaletteOptions,
	Theme as MuiTheme,
	ThemeOptions as MuiThemeOptions
} from '@mui/material/styles';
import { Breakpoint } from '@mui/system';

export type ThemeActionColorType = 'primary' | 'secondary';
export type ThemeStatusColorType = 'error' | 'warning' | 'info' | 'success';
export type ThemeButtonSizeType = 'small' | 'medium' | 'large';
export type ThemeControlSizeType = 'small' | 'medium';

export type ThemeBreakpoint = Breakpoint;
export type ThemeMqOrientation = 'portrait' | 'landscape';
export type ThemeDataBreakpoints = {
	[key in ThemeBreakpoint]: number;
};

export type PaletteActionColorOptions = MuiPaletteColorOptions & {
	containedHoverBackground: string;
	outlinedHoverBackground: string;
	outlinedRestingBorder: string;
};

export type PaletteStatusColorOptions = PaletteActionColorOptions & {
	alertContent: string;
	alertBackground: string;
};

type PaletteActionColor = MuiPaletteColor & {
	containedHoverBackground: string;
	outlinedHoverBackground: string;
	outlinedRestingBorder: string;
};

type PaletteStatusColor = PaletteActionColor & {
	containedHoverBackground: string;
	outlinedHoverBackground: string;
	outlinedRestingBorder: string;
};

interface PaletteGradientOption {
	default: string;
	active: string;
	disabled: string;
}

interface PaletteGradientColor {
	blue: string;
	purple: string;
	gold: string;
	button: PaletteGradientOption;
}

export interface Theme extends MuiTheme {
	__name: string;
	palette: MuiPalette & {
		primary: PaletteActionColor;
		secondary: PaletteActionColor;
		error: PaletteStatusColor;
		warning: PaletteStatusColor;
		info: PaletteStatusColor;
		success: PaletteStatusColor;
		gradient: PaletteGradientColor;
	};
}

export interface ThemeOptions extends Omit<MuiThemeOptions, 'components'> {
	__name: string;
	palette?: MuiPaletteOptions & {
		primary?: PaletteActionColorOptions;
		secondary?: PaletteActionColorOptions;
		error?: PaletteStatusColorOptions;
		warning?: PaletteStatusColorOptions;
		info?: PaletteStatusColorOptions;
		success?: PaletteStatusColorOptions;
		gradient?: PaletteGradientColor;
	};
}
