import { FC, forwardRef } from 'react';
import { UiPaperProps } from './types';
import { Root } from './styled';

export const UiPaper: FC<UiPaperProps> = forwardRef((props, ref) => {
	return <Root {...props} ref={ref} />;
});
