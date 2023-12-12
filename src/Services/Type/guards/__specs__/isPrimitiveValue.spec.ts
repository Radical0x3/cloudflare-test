import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { isPrimitiveValue } from '../isPrimitiveValue';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(isPrimitiveValue, [
		{ parameters: [undefined], expected: true },
		{ parameters: [null], expected: true },
		{ parameters: [true], expected: true },
		{ parameters: [false], expected: true },
		{ parameters: [345345], expected: true },
		{ parameters: ['lorem'], expected: true },
		{ parameters: [[{}]], expected: false },
		{ parameters: [{}], expected: false },
		// eslint-disable-next-line prefer-regex-literals
		{ parameters: [new RegExp('xxx')], expected: false },
		{ parameters: [/\d/], expected: false },
		{ parameters: [new Date()], expected: false }
	]);
});
