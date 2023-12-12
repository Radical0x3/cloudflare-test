import { FC, forwardRef } from 'react';
import { Root } from './styled';
import { UiTableBodyProps } from './types';

export const UiTableBody: FC<UiTableBodyProps> = forwardRef((props, ref) => {
	return <Root {...props} ref={ref} />;
});
