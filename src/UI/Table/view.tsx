import { FC } from 'react';
import { Root } from './styled';
import { UiTableProps } from './types';

export const UiTable: FC<UiTableProps> = (props) => {
	return <Root {...props} />;
};
