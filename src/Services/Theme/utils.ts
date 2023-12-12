import { mathRound } from '@wezom/toolkit-math-cjs';

export const jssVw = (...pixels: (number | 'auto' | 'inherit' | 'initial' | 'revert' | 'unset')[]): string => {
	return Object.values(pixels)
		.map(function (px) {
			if (typeof px === 'string') {
				return px;
			} else if (px === 0) {
				return '0';
			}
			return mathRound((px * 100) / 1920, -5) + 'vw';
		})
		.join(' ');
};
