import React, { ReactElement } from 'react';
import { FormProvider as ReactHookFormProvider, useForm } from 'react-hook-form';
import { UiLinearProgress } from 'UI/LinearProgress';
import { HelperContext } from './helper-context';
import { useHandleSubmitWithErrors } from './hooks/useHandleSubmitWithErrors';
import { FormProviderProps } from './types';
import { Root } from './styled';

export const FormProvider: React.FC<FormProviderProps> = (props): ReactElement => {
	const methods = useForm({
		context: props.context,
		criteriaMode: props.criteriaMode,
		defaultValues: props.defaultValues,
		delayError: props.delayError,
		mode: props.mode,
		resolver: props.resolver,
		reValidateMode: props.reValidateMode,
		shouldFocusError: props.shouldFocusError,
		shouldUnregister: props.shouldUnregister,
		shouldUseNativeValidation: props.shouldUseNativeValidation
	});

	const handleSubmit = useHandleSubmitWithErrors({
		methods,
		criteriaMode: props.criteriaMode,
		handleSubmit: props.handleSubmit,
		handleInvalidSubmit: props.handleInvalidSubmit,
		resetOnSubmit: props.resetOnSubmit
	});

	const isSubmitting = methods.formState.isSubmitting;

	const triggerSubmit = methods.handleSubmit(handleSubmit);

	return (
		<Root>
			{isSubmitting && <UiLinearProgress />}
			<ReactHookFormProvider {...methods}>
				<form
					onSubmit={handleSubmit}
					onKeyDown={(e) => {
						if (!props.submitOnEnter) return;
						if (e.key === 'Enter' && !e.shiftKey) {
							e.preventDefault();
							return triggerSubmit();
						}
					}}
					autoComplete={props.formAutoComplete}
					className={props.formClassName}
					id={props.formId}
					name={props.formName}
					noValidate={props.formNoValidate}
					style={props.formStyle}
				>
					<HelperContext.Provider value={{ triggerSubmit }}>
						{typeof props.children === 'function' ? props.children(methods) : props.children}
					</HelperContext.Provider>
				</form>
			</ReactHookFormProvider>
		</Root>
	);
};
