import { FC } from 'react';
import { UiLinkUnstyled } from 'UI/Link';
import { Root, classes } from './styled';
import { UiIconButtonProps } from './types';
import clsx from 'clsx';

export const UiIconButton: FC<UiIconButtonProps> = ({
	href,
	component,
	color = 'primary',
	size = 'medium',
	variant = 'text',
	className,
	...props
}) => {
	return (
		<Root
			{...props}
			className={clsx(className, {
				[classes.variantOutlined]: variant === 'outlined',
				[classes.variantContained]: variant === 'contained',
				[classes.variantText]: variant === 'text'
			})}
			color={color}
			size={size}
			href={href}
			component={href && !component ? UiLinkUnstyled : component}
		/>
	);
};
