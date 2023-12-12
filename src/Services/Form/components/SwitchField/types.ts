import { RegisterOptions } from 'react-hook-form/dist/types/validator';
import type { UiSwitchProps } from 'UI/Switch';

export interface FormSwitchFieldProps extends Omit<UiSwitchProps, 'onChange'> {
	name: string;
	label?: string;
	checkedLabel?: string;
	unCheckedLabel?: string;
	validationRules?: RegisterOptions;
	onChange?(value: boolean): void;
}
