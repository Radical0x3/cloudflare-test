import { FC } from 'react';
import { Root } from './styled';
import { UiCollapseProps } from './types';

export const UiCollapse: FC<UiCollapseProps> = (props) => {
	return <Root {...props} />;
};
