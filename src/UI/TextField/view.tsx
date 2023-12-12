import { FC, ReactElement } from 'react';
import { Root } from './styled';
import { UiTextFieldProps } from './types';

export const UiTextField: FC<UiTextFieldProps> = ({
	required,
	label,
	size = 'medium',
	variant = 'outlined',
	...props
}): ReactElement => {
	return <Root {...props} label={label && required ? `${label} *` : label} size={size} variant={variant} />;
};
