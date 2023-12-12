import { deepmerge } from '@mui/utils';
import {
	_coreThemeParams,
	_createActionColors,
	_createMainColors,
	_createStatusColors,
	_createTheme
} from './_coreThemeParams';
import { ThemeOptions } from './types';
import { alpha } from '@mui/material';

/** @see https://mui.com/customization/default-theme/ */
const options: ThemeOptions = {
	__name: 'lightColorTheme',
	palette: {
		mode: 'light',
		primary: {
			..._createMainColors('#370370', '#ffffff'),
			..._createActionColors('#370370'),
			light: '#484DBA'
		},
		secondary: {
			..._createMainColors('#000', '#ffffff'),
			..._createActionColors('#000')
		},
		error: {
			..._createMainColors('#FF5555', '#ffffff'),
			..._createStatusColors('#FF5555'),
			light: '#FF8484',
			dark: '#E24544'
		},
		warning: {
			..._createMainColors('#FFBE78', '#ffffff'),
			..._createStatusColors('#FFBE78')
		},
		info: {
			..._createMainColors('#597EFF', '#ffffff'),
			..._createStatusColors('#597EFF')
		},
		success: {
			..._createMainColors('#46DC00', '#ffffff'),
			..._createStatusColors('#46DC00'),
			light: '#DAE5E3',
			dark: '#006A67'
		},
		text: {
			primary: '#484849',
			secondary: alpha('#ffffff', 0.7),
			disabled: '#849092'
		},
		background: {
			default: '#ffffff',
			paper: '#EDEFF1'
		},
		gradient: {
			blue: 'linear-gradient(180deg, #597EFF 0%, #36006C 100%)',
			purple: 'linear-gradient(5deg, #573E97 -5.3%, #A58CF4 147.91%)',
			gold: 'linear-gradient(143deg, #FFDDB8 14.56%, #FFBE78 84.47%)',
			button: {
				default: 'linear-gradient(270deg, #AF50F8 0%, #597EFF 100%)',
				active: 'linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), linear-gradient(270deg, #AF50F8 0%, #597EFF 100%)',
				disabled:
					'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(270deg, #AF50F8 0%, #597EFF 100%)'
			}
		},
		divider: alpha('#000', 0.1),
		grey: {
			50: '#f1f6f6',
			100: '#f4fafa',
			200: '#ECEEED',
			300: '#CFDFE0',
			400: '#C7C8CE',
			500: '#B0BABA',
			600: '#849092',
			700: '#717D7E',
			800: '#4E5758',
			900: '#0E1522'
		}
	}
};

export const lightColorTheme = _createTheme(deepmerge(_coreThemeParams, options));
