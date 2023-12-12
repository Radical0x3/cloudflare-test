import { UiTextFieldSearchProps } from 'UI/TextFieldSearch';
import { RegisterOptions } from 'react-hook-form';

export interface FormSearchFieldProps extends Omit<UiTextFieldSearchProps, 'inputRef' | 'value' | 'onChange'> {
	name: string;
	validationRules?: RegisterOptions;
	onChange?(value: any): void;
}
