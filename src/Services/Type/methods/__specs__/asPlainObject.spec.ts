import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { asPlainObject } from '../asPlainObject';

describe('asPlainObject()', () => {
	describe('Function signature should match specification', () => {
		jestFunctionSignatureTest(asPlainObject, [
			{ parameters: [true], expected: null },
			{ parameters: [undefined], expected: null },
			{ parameters: [null], expected: null },
			{ parameters: [[{}]], expected: null },
			{ parameters: [{ x: true }], expected: { x: true } }
		]);
	});
});
