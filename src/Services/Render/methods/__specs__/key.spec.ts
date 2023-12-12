import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { key } from '../key';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(key, [
		{ parameters: ['color', 1], expected: 'color::1' },
		{ parameters: [999, 1], expected: '999::1' },
		{ parameters: [true, 1], expected: 'true::1' },
		{ parameters: [false, 1], expected: 'false::1' },
		{ parameters: ['lorem', 999, 1, 'x', false], expected: 'lorem::999::1::x::false' }
	]);
});
