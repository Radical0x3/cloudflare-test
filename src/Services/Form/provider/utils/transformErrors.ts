import { arrayGetFirstNotNullableItem } from '@wezom/toolkit-array-cjs';
import { CriteriaMode } from 'react-hook-form';
import { GraphQLErrorExtValidation } from 'Services/Error';
import { TypeService } from 'Services/Type';
import { FormProviderSubmitErrors } from '../types';

const mergeMessages = (messages: string[]): string =>
	messages.map((msg, i) => (i + 1 === messages.length || /[.,!?;:]$/.test(msg) ? msg : msg + '.')).join(' \n');

function transformErrors(
	errors: GraphQLErrorExtValidation[],
	criteriaMode: CriteriaMode = 'firstError'
): FormProviderSubmitErrors {
	return errors.reduce<FormProviderSubmitErrors>((acc, { extensions: { validation } }, i) => {
		return TypeService.guards.isPlainObject(validation)
			? Object.entries(validation).reduce((innerAcc, [field, messages]) => {
					if (messages) {
						return {
							...innerAcc,
							[field]:
								criteriaMode === 'firstError'
									? arrayGetFirstNotNullableItem(messages)
									: mergeMessages(messages)
						};
					} else {
						return innerAcc;
					}
			  }, acc)
			: {};
	}, {});
}

export { transformErrors as default };
