import { FC } from 'react';
import { UiTabProps } from './types';
import { Root } from './styled';

export const UiTab: FC<UiTabProps> = (props) => {
	return <Root {...props} />;
};
