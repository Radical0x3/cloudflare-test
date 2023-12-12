import { TypeService } from 'Services/Type';
import { ExtensionCategories } from '../ExtensionCategories';
import type { GraphQLErrorExtValidation } from '../types';

export const isGraphQLErrorExtValidation = (error: unknown): error is GraphQLErrorExtValidation => {
	return (
		TypeService.guards.isPlainObject(error) &&
		error.extensions !== undefined &&
		error.extensions.category === ExtensionCategories.Validation &&
		TypeService.guards.isPlainObject(error.extensions.validation)
	);
};
