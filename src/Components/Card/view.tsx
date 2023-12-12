import { FC } from 'react';
import clsx from 'clsx';
import { Root, classes } from './styled';
import { CardProps } from './types';

export const Card: FC<CardProps> = ({ noPadding, overflowVisible, className, ...props }) => {
	return (
		<Root
			{...props}
			className={clsx(className, {
				[classes.noPadding]: noPadding,
				[classes.overflowVisible]: overflowVisible
			})}
		/>
	);
};
