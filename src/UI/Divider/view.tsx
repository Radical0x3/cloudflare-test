import { FC } from 'react';
import { Box } from '@mui/material';
import { Root } from './styled';
import { UiDividerProps } from './types';

export const UiDivider: FC<UiDividerProps> = ({ orientation, variant, flexItem, ...rest }) => {
	return (
		<Box {...rest}>
			<Root orientation={orientation} variant={variant} flexItem={flexItem} />
		</Box>
	);
};
