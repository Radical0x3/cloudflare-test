import { FC, forwardRef } from 'react';
import { Root } from './styled';
import { UiPopperProps } from './types';

export const UiPopper: FC<UiPopperProps> = forwardRef((props, ref) => {
	return <Root {...props} ref={ref} />;
});
