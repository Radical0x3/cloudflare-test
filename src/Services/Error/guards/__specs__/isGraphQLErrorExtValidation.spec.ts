import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { GraphQLError } from 'graphql';
import { ExtensionCategories } from '../../ExtensionCategories';
import { GraphQLErrorExtValidation } from '../../types';
import { isGraphQLErrorExtValidation } from '../isGraphQLErrorExtValidation';

describe('Function signature should match specification', () => {
	describe('Valid cases', () => {
		jestFunctionSignatureTest(isGraphQLErrorExtValidation, [
			{
				parameters: [
					new GraphQLError('xxx', undefined, undefined, undefined, undefined, undefined, {
						category: ExtensionCategories.Validation,
						validation: {
							name: ['Name is required!', 'Min length 8 symbols'],
							age: ['Age is required', 'Min value is 18']
						}
					}) as GraphQLErrorExtValidation
				],
				expected: true
			}
		]);
	});

	describe('Invalid cases', () => {
		jestFunctionSignatureTest(isGraphQLErrorExtValidation, [
			{
				parameters: [new Error('xxx')],
				expected: false
			},

			{
				parameters: [null],
				expected: false
			},

			{
				parameters: [new GraphQLError('xxx')],
				expected: false
			},

			{
				parameters: [
					new GraphQLError('xxx', undefined, undefined, undefined, undefined, undefined, {
						category: 'xxxx',
						validation: {
							name: ['Name is required!', 'Min length 8 symbols'],
							age: ['Age is required', 'Min value is 18']
						}
					})
				],
				expected: false
			}
		]);
	});
});
