import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { isPlainObject } from '../isPlainObject';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(isPlainObject, [
		{ parameters: [true], expected: false },
		{ parameters: [undefined], expected: false },
		{ parameters: [null], expected: false },
		{ parameters: [[{}]], expected: false },
		{ parameters: [{}], expected: true }
	]);
});
