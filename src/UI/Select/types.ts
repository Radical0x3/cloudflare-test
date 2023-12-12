import { SelectProps } from '@mui/material';

export interface UiSelectList {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface UiSelectProps extends SelectProps {
	options: UiSelectList[];
}
