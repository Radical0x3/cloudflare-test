import type { BaseSyntheticEvent, CSSProperties, ReactElement } from 'react';
import type { FieldErrors, UseFormProps, UseFormReturn } from 'react-hook-form';
import { PlainObject } from 'Interfaces/PlainObject';
import { ReactNode } from 'react';
import { MessageTypeEnum } from 'Services/GQL';

export interface FormProviderSubmitHandler<FormValues extends PlainObject = any> {
	(values: FormValues, methods: UseFormReturn<FormValues>, event?: BaseSyntheticEvent): FormProviderSubmitReturnType;
}

/** Метод будет вызван при попытке отправить форму, но получаем ошибки валидации формы */
export interface FormProviderInvalidSubmitHandler<FormValues extends PlainObject = any> {
	(errors: FieldErrors<FormValues>, event?: BaseSyntheticEvent): Promise<void>;
}

export interface FormProviderProps<FormValues extends PlainObject = any> extends UseFormProps {
	handleSubmit: FormProviderSubmitHandler<FormValues>;
	handleInvalidSubmit?: FormProviderInvalidSubmitHandler;
	formName?: string | undefined;
	formId?: string;
	formClassName?: string;
	formStyle?: CSSProperties;
	formAutoComplete?: string | undefined;
	formNoValidate?: boolean | undefined;
	resetOnSubmit?: boolean;
	submitOnEnter?: boolean;
	children?: ((props: UseFormReturn<FormValues>) => ReactNode) | ReactNode;
}

export type FormProviderChildrenMethods<FormValues extends PlainObject = PlainObject> = UseFormReturn<FormValues>;

export interface FormProviderChildrenRenderFn<FormValues extends PlainObject = PlainObject> {
	(methods: UseFormReturn<FormValues>): ReactElement;
}

export type FormProviderSubmitReturnType = Promise<void | FormProviderSubmitResult>;
export type FormProviderResponseType<Data = PlainObject | boolean | null> = {
	data?: Data | boolean | null;
	type: MessageTypeEnum | null; // Success, Danger, Warning
	message: string | null;
};

export type FormProviderSubmitErrors<T = PlainObject> = Partial<Record<keyof T, string>>;
export type FormProviderFieldNames<T> = Record<keyof T, keyof T | string>;
export type FormProviderSubmitResult<Data = undefined, Errors = PlainObject> =
	| Data
	| {
			submitErrors: FormProviderSubmitErrors<Errors>;
	  };

export interface FormProviderHelperContext {
	triggerSubmit(): Promise<void>;
}

export type FormValuesAction = 'save' | 'saveAndClose' | 'saveAndCreate';
