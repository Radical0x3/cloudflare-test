import { FC } from 'react';
import { Root } from './styled';
import { UiTableCellProps } from './types';

export const UiTableCell: FC<UiTableCellProps> = (props) => {
	return <Root {...props} />;
};
