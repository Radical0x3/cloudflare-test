import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import prefix from '../prefix';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(prefix, [
		{
			name: 'color-adjust',
			parameters: ['color-adjust:economy;', 12],
			expected: '-webkit-print-color-adjust:economy;color-adjust:economy;'
		},
		{
			name: 'clip-path',
			parameters: ['clip-path:circle(50px at 0 100px);', 9],
			expected: '-webkit-clip-path:circle(50px at 0 100px);clip-path:circle(50px at 0 100px);'
		},
		{
			name: 'backface-visibility',
			parameters: ['backface-visibility:hidden;', 19],
			expected: '-webkit-backface-visibility:hidden;backface-visibility:hidden;'
		},
		{
			name: 'user-select',
			parameters: ['user-select:none;', 11],
			expected: '-webkit-user-select:none;user-select:none;'
		},
		{
			name: 'appearance',
			parameters: ['appearance:button;', 10],
			expected: ['-webkit-appearance:button;', '-moz-appearance:button;', 'appearance:button;'].join('')
		},
		{
			name: 'background',
			parameters: ['background:image-set(url("small-balloons.jpg") 1x, url("large-balloons.jpg") 2x);', 10],
			expected: [
				'background:-webkit-image-set(url("small-balloons.jpg") 1x, url("large-balloons.jpg") 2x);',
				'background:image-set(url("small-balloons.jpg") 1x, url("large-balloons.jpg") 2x);'
			].join('')
		},
		{
			name: 'min-inline-size',
			parameters: ['min-inline-size:stretch;', 15],
			expected: ['min-inline-size:-webkit-fill-available;', 'min-inline-size:stretch;'].join('')
		}
	]);
});
