import { ButtonProps } from '@mui/material';
import { ElementType } from 'react';

export interface UiButtonProps extends ButtonProps {
	component?: ElementType;
	target?: string;
	asPath?: string;
}
