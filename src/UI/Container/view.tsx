import clsx from 'clsx';
import { FC } from 'react';
import { UiContainerProps } from './types';
import { Root, classes } from './styled';

export const UiContainer: FC<UiContainerProps> = ({ disableGutters, size = 'medium', children, ...props }) => (
	<Root
		{...props}
		className={clsx({
			[classes.disableGutters]: disableGutters,
			[classes.sizeSmall]: size === 'small'
		})}
	>
		{children}
	</Root>
);
