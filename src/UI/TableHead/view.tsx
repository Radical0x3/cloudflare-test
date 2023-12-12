import { FC } from 'react';
import { Root } from './styled';
import { UiTableHeadProps } from './types';

export const UiTableHead: FC<UiTableHeadProps> = (props) => {
	return <Root {...props} />;
};
