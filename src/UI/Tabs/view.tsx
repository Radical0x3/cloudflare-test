import { FC } from 'react';
import { UiTabsProps } from './types';
import { Root } from './styled';

export const UiTabs: FC<UiTabsProps> = (props) => {
	return <Root variant={'scrollable'} scrollButtons={true} allowScrollButtonsMobile={true} {...props} />;
};
