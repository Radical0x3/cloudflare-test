import { RegisterOptions } from 'react-hook-form';
import { UiDatePickerProps } from 'UI/DatePicker';

export interface FormDatePickerFieldProps extends Omit<UiDatePickerProps, 'onChange' | 'value'> {
	name: string;
	className?: string;
	label?: string;
	validationRules?: RegisterOptions;
	required?: boolean;
	onChange?(value: any): void;
}
