import { FC } from 'react';
import clsx from 'clsx';
import { Root, classes } from './styled';
import { SectionProps } from './types';

export const Section: FC<SectionProps> = ({
	zIndex,
	border,
	borderTop,
	borderBottom,
	padding,
	margin,
	background,
	paper,
	children,
	className,
	...props
}) => {
	return (
		<Root
			{...props}
			style={{ zIndex }}
			className={clsx(className, {
				[classes.border]: border,
				[classes.borderTop]: borderTop,
				[classes.borderBottom]: borderBottom,
				[classes.padding]: padding,
				[classes.margin]: margin,
				[classes.background]: background,
				[classes.paper]: paper
			})}
		>
			{children}
		</Root>
	);
};
