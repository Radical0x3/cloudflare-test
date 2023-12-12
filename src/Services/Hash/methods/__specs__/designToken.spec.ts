import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { designToken } from '../designToken';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(designToken, [
		{ parameters: ['theme-design-token-name', false], expected: 'theme-design-token-name' },
		{ parameters: ['theme-design-token-name', true], expected: 'dt-ffa6e557' }
	]);
});
