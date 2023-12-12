import { UiTextFieldProps } from 'UI/TextField';
import { RegisterOptions } from 'react-hook-form';
import { DateRangePickerProps } from 'react-date-range';

export interface FormDateRangePickerFieldProps extends Omit<UiTextFieldProps, 'inputRef' | 'value'> {
	name: string;
	validationRules?: RegisterOptions;
	datePickerProps?: DateRangePickerProps;
	dateFormat?: string;
	required?: boolean;
	onChange?(value: any): void;
}
