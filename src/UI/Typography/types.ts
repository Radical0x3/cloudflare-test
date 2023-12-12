import { TypographyProps } from '@mui/material';
import { ElementType } from 'react';

export interface UiTypographyProps extends Omit<TypographyProps, 'component'> {
	href?: string | null;
	asPath?: string | null;
	target?: string;
	rel?: string;
	component?: ElementType;
}
