import { UiTextFieldPasswordProps } from 'UI/TextFieldPassword';
import { RegisterOptions } from 'react-hook-form';

export interface FormPasswordFieldProps extends Omit<UiTextFieldPasswordProps, 'inputRef' | 'value' | 'onChange'> {
	name: string;
	validationRules?: RegisterOptions;
	onChange?(value: any): void;
}
