import { FC, forwardRef } from 'react';
import { Root } from './styled';
import { UiInputAdornmentProps } from './types';

export const UiInputAdornment: FC<UiInputAdornmentProps> = forwardRef(({ children, ...props }, ref) => {
	return (
		<Root ref={ref} {...props}>
			<>{children}</>
		</Root>
	);
});
