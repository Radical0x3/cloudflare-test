import { ApolloError } from '@apollo/client';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { isApolloError } from '../isApolloError';

describe('Function signature should match specification', () => {
	describe('Valid cases', () => {
		jestFunctionSignatureTest(isApolloError, [
			{ parameters: [new ApolloError({})], expected: true },
			{
				parameters: [
					{
						message: 'Lorem ipsum',
						graphQLErrors: [],
						clientErrors: [],
						networkError: null
					}
				],
				expected: true
			}
		]);
	});

	describe('Invalid cases', () => {
		jestFunctionSignatureTest(isApolloError, [
			{
				parameters: [new Error('xxx')],
				expected: false
			},

			{
				parameters: [null],
				expected: false
			},

			{
				parameters: [
					{
						// message: 'Lorem ipsum',
						graphQLErrors: [],
						clientErrors: [],
						networkError: null
					}
				],
				expected: false
			},

			{
				parameters: [
					{
						message: 'Lorem ipsum',
						// graphQLErrors: [],
						clientErrors: [],
						networkError: null
					}
				],
				expected: false
			},

			{
				parameters: [
					{
						message: 'Lorem ipsum',
						graphQLErrors: [],
						clientErrors: []
						// networkError: null
					}
				],
				expected: false
			}
		]);
	});
});
