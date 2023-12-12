import { FC } from 'react';
import { LinearProgress } from '@mui/material';
import { Root } from './styled';
import { UiLinearProgressProps } from './types';

export const UiLinearProgress: FC<UiLinearProgressProps> = (props) => {
	return (
		<Root>
			<LinearProgress {...props} />
		</Root>
	);
};
