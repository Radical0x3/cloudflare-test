import { FC, ReactElement } from 'react';
import { UiLinkUnstyled } from 'UI/Link';
import { UiTypographyProps } from './types';
import { Root } from './styled';

export const UiTypography: FC<UiTypographyProps> = ({
	children,
	href,
	component = 'div',
	color = 'text.primary',
	...props
}): ReactElement => {
	return (
		<Root {...props} component={href ? UiLinkUnstyled : component} href={href} color={color}>
			{children}
		</Root>
	);
};
