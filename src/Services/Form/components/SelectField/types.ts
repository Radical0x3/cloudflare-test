import { RegisterOptions } from 'react-hook-form';
import { SelectProps } from '@mui/material';

export interface FormSelectFieldList {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface FormSelectFieldProps extends SelectProps {
	className?: string;
	name: string;
	validationRules?: RegisterOptions;
	options: FormSelectFieldList[];
}
