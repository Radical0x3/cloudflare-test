import { ApolloError } from '@apollo/client';
import { TypeService } from 'Services/Type';

export function isApolloError(error: unknown): error is ApolloError {
	if (error instanceof ApolloError) {
		return true;
	} else if (TypeService.guards.isPlainObject(error)) {
		// если это ответ с JSON то проверяем руками
		return (
			typeof error.message === 'string' &&
			Array.isArray(error.graphQLErrors) &&
			Array.isArray(error.clientErrors) &&
			error.networkError !== undefined
		);
	}
	return false;
}
