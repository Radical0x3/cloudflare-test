import { GridProps } from '@mui/material';
import { ElementType } from 'react';

export interface UiGridProps extends GridProps {
	component?: ElementType;
}
