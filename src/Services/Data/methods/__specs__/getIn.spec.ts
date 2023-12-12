import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { getIn } from '../getIn';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(getIn, [
		{ parameters: [{ key: 'value' }, 'key'], expected: 'value' },
		{ parameters: [{ key1: { key2: 'value' } }, 'key1.key2'], expected: 'value' },
		{
			parameters: [{ key1: [null, { key2: 'value' }] }, 'key1[1].key2'],
			expected: 'value'
		},
		{
			parameters: [{ key1: [[null], [{ key2: 'value' }]] }, 'key1[1][0].key2'],
			expected: 'value'
		}
	]);
});
