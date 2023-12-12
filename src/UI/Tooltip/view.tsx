import { FC, forwardRef } from 'react';
import { Root } from './styled';
import { UiTooltipProps } from './types';

export const UiTooltip: FC<UiTooltipProps> = forwardRef(({ children, ...props }, ref) => {
	return (
		<Root ref={ref} {...props}>
			<span>{children}</span>
		</Root>
	);
});
