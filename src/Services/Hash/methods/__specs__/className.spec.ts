import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { className } from '../className';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(className, [
		{ parameters: ['lorem-ipsum-dolor-sit-amet', false], expected: 'lorem-ipsum-dolor-sit-amet' },
		{ parameters: ['lorem-ipsum-dolor-sit-amet', true], expected: '_c82183127' }
	]);
});
