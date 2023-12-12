import { FC, forwardRef } from 'react';
import { Root } from './styled';
import { UiTableRowProps } from './types';

export const UiTableRow: FC<UiTableRowProps> = forwardRef((props, ref) => {
	return <Root {...props} ref={ref} />;
});
