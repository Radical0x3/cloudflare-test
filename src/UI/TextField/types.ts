import { BaseTextFieldProps, TextFieldProps } from '@mui/material';

export interface UiTextFieldProps extends BaseTextFieldProps {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	InputLabelProps?: TextFieldProps['InputLabelProps'];
	// eslint-disable-next-line @typescript-eslint/naming-convention
	InputProps?: TextFieldProps['InputProps'];
	onChange?: TextFieldProps['onChange'];
}
