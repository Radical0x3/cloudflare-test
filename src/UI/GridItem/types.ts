import { GridProps } from '@mui/material';
import { ElementType } from 'react';

export interface UiGridItemProps extends GridProps {
	component?: ElementType;
}
