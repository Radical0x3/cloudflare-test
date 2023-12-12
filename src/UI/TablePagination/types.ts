import { TablePaginationProps } from '@mui/material';
import { ElementType } from 'react';

export type UiTablePaginationProps = TablePaginationProps & {
	component: ElementType;
};
