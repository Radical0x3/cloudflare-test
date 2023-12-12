import { FC } from 'react';
import { Root } from './styled';
import { UiTableSortLabelProps } from './types';

export const UiTableSortLabel: FC<UiTableSortLabelProps> = (props) => {
	return <Root {...props} />;
};
