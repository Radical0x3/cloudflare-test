import { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import { UiGridProps } from './types';

export const UiGrid: FC<UiGridProps> = ({ sx = [], children, ...props }): ReactElement => {
	return (
		<Grid {...props} sx={[{}, ...(Array.isArray(sx) ? sx : [sx])]} container>
			{children}
		</Grid>
	);
};
