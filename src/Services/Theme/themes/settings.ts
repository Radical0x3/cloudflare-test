import { ThemeBreakpoint } from './types';

export const breakpointValues: { [key in ThemeBreakpoint]: number } = {
	xs: 0,
	sm: 600,
	md: 900,
	lg: 1200,
	xl: 1536
};

export const spacingValues = [0, 4, 8, 16, 24, 32, 40, 64, 80, 120, 160, 240];
//                            0  1  2  3   4   5   6   7   8   9    10   11
