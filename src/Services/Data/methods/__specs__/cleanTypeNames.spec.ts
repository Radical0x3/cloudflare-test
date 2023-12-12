import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { cleanTypeNames } from '../cleanTypeNames';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(cleanTypeNames, [
		{
			parameters: [{ obj: { key: 'value', __typename: 'key:value' } }],
			expected: { obj: { key: 'value' } }
		},
		{
			parameters: [{ array: [{ key: 'value', __typename: 'key:value' }] }],
			expected: { array: [{ key: 'value' }] }
		},
		{
			parameters: [
				{
					obj: { key: 'value', __typename: 'key:value' },
					null: null,
					deep1: {
						deep2: { key: 'value', __typename: 'key:value' },
						array: [
							{
								deep3: { key: 'value', __typename: 'key:value' }
							},
							{
								deep3: { key: 'value', __typename: 'key:value' }
							}
						]
					}
				}
			],
			expected: {
				obj: { key: 'value' },
				null: null,
				deep1: {
					deep2: { key: 'value' },
					array: [
						{
							deep3: { key: 'value' }
						},
						{
							deep3: { key: 'value' }
						}
					]
				}
			}
		}
	]);
});
