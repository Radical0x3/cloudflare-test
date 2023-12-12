import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { isNotEmptyString } from '../isNotEmptyString';

describe('Function signature should match specification', () => {
	describe('Invalid cases', () => {
		jestFunctionSignatureTest(isNotEmptyString, [
			{ parameters: [undefined], expected: false },
			{ parameters: [''], expected: false }
		]);
	});

	describe('Valid cases', () => {
		jestFunctionSignatureTest(isNotEmptyString, [
			{ parameters: ['Lorem'], expected: true },
			{ parameters: ['0'], expected: true }
		]);
	});
});
