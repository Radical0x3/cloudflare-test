import { BaseSyntheticEvent, useMemo } from 'react';
import type { CriteriaMode } from 'react-hook-form';
import { ErrorService } from 'Services/Error';
import { PlainObject } from 'Interfaces/PlainObject';
import { TypeService } from 'Services/Type';
import { FormProviderChildrenMethods, FormProviderProps, FormProviderSubmitErrors } from '../types';
import transformErrors from '../utils/transformErrors';

interface HookConfig extends FormProviderProps {
	methods: FormProviderChildrenMethods;
	criteriaMode?: CriteriaMode;
	resetOnSubmit?: boolean;
}

export function useHandleSubmitWithErrors(config: HookConfig): () => Promise<void> {
	return useMemo((): (() => Promise<void>) => {
		const handleSubmitWithErrors = async (values: PlainObject, event?: BaseSyntheticEvent): Promise<void> => {
			let errors: void | FormProviderSubmitErrors;
			let submitErrorsMessage = '';
			try {
				const result = await config.handleSubmit(values, config.methods, event);
				if (result && TypeService.guards.isPlainObject(result.submitErrors)) {
					errors = result.submitErrors;
					submitErrorsMessage = 'Has submit errors!';
				} else if (config.resetOnSubmit) {
					config.methods.reset();
				}
			} catch (err) {
				if (ErrorService.guards.isApolloError(err)) {
					const validationErrors = err.graphQLErrors.filter(ErrorService.guards.isGraphQLErrorExtValidation);
					submitErrorsMessage = err.message;
					if (validationErrors.length) {
						errors = transformErrors(validationErrors, config.criteriaMode);
					}
				} else if (err instanceof Error) {
					submitErrorsMessage = err.message;
				} else {
					submitErrorsMessage = String(err);
				}
			}

			if (errors) {
				console.warn(submitErrorsMessage);
				Object.entries(errors).forEach(([field, message]) => {
					config.methods.setError(field, { message });
				});
			}
		};
		return config.methods.handleSubmit(handleSubmitWithErrors, config.handleInvalidSubmit);
	}, [config]);
}
