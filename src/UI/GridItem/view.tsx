import { FC, ReactElement } from 'react';
import { UiGridItemProps } from './types';
import { Grid } from '@mui/material';

export const UiGridItem: FC<UiGridItemProps> = ({ children, ...props }): ReactElement => {
	return (
		<Grid item {...props}>
			{children}
		</Grid>
	);
};
