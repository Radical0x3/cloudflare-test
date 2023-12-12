import { FC, forwardRef } from 'react';
import { UiMenuListProps } from './types';
import { Root } from './styled';

export const UiMenuList: FC<UiMenuListProps> = forwardRef((props, ref) => {
	return <Root {...props} ref={ref} />;
});
