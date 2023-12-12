import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { GraphQLError } from 'graphql';
import { ErrorService, GraphQLErrorExtValidation } from 'Services/Error';
import transformErrors from '../transformErrors';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(transformErrors, [
		{ parameters: [[]], expected: {} },
		{
			parameters: [
				[
					new GraphQLError('xxx', undefined, undefined, undefined, undefined, undefined, {
						category: ErrorService.ExtensionCategories.Validation,
						validation: {}
					}) as GraphQLErrorExtValidation
				]
			],
			expected: {}
		},
		{
			parameters: [
				[
					new GraphQLError('xxx', undefined, undefined, undefined, undefined, undefined, {
						category: ErrorService.ExtensionCategories.Validation,
						validation: {
							name: ['Name is required!', 'Min length 8 symbols'],
							age: ['Age is required', 'Min value is 18']
						}
					}) as GraphQLErrorExtValidation
				]
			],
			expected: {
				name: 'Name is required!',
				age: 'Age is required'
			}
		},
		{
			parameters: [
				[
					new GraphQLError('xxx', undefined, undefined, undefined, undefined, undefined, {
						category: ErrorService.ExtensionCategories.Validation,
						validation: {
							name: ['Name is required!', 'Min length 8 symbols'],
							age: ['Age is required', 'Min value is 18']
						}
					}) as GraphQLErrorExtValidation
				],
				'all'
			],
			expected: {
				name: 'Name is required! \nMin length 8 symbols',
				age: 'Age is required. \nMin value is 18'
			}
		}
	]);
});
