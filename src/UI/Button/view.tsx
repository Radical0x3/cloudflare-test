import { forwardRef } from 'react';
import { UiLinkUnstyled } from 'UI/Link';
import { Root } from './styled';
import { UiButtonProps } from './types';

export const UiButton = forwardRef<any, UiButtonProps>(function (props, ref) {
	const {
		component: _component = 'button',
		variant = 'contained',
		size = 'medium',
		color = 'primary',
		...propsRest
	} = props;
	return (
		<Root
			ref={ref}
			{...propsRest}
			component={propsRest.href ? UiLinkUnstyled : _component}
			variant={variant}
			size={size}
			color={color}
		/>
	);
});
