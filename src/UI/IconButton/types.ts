import { IconButtonProps } from '@mui/material';
import { ElementType } from 'react';

export interface UiIconButtonProps extends Omit<IconButtonProps, 'href'> {
	href?: string | null;
	asPath?: string | null;
	target?: string;
	rel?: string;
	component?: ElementType;
	variant?: 'outlined' | 'contained' | 'text';
}
