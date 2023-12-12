import { UiTextFieldProps } from 'UI/TextField';
import { RegisterOptions } from 'react-hook-form';

export interface FormTextFieldProps extends Omit<UiTextFieldProps, 'inputRef' | 'value' | 'onChange'> {
	name: string;
	validationRules?: RegisterOptions;
	onChange?(value: any): void;
}
