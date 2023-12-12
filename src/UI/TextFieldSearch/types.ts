import { UiTextFieldProps } from 'UI/TextField';

export interface UiTextFieldSearchProps extends Omit<UiTextFieldProps, 'startAdornment' | 'endAdornment'> {
	onClear?(): void | Promise<void>;
}
