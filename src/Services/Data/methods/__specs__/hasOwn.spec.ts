import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { hasOwn } from '../hasOwn';

describe('Function signature should match specification', () => {
	class Data {
		prop = 'value';
		fn0 = (): void => undefined;

		fn1(): void {
			return undefined;
		}
	}

	const data = new Data();
	(data as any).fn2 = (): void => undefined;

	jestFunctionSignatureTest(hasOwn, [
		{ parameters: [data, 'prop'], expected: true },
		{ parameters: [data, 'fn0'], expected: true },
		{ parameters: [data, 'fn1'], expected: false },
		{ parameters: [data, 'fn2'], expected: true }
	]);
});
