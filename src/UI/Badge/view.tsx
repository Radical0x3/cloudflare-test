import { FC } from 'react';
import { Root } from './styled';
import { UiBadgeProps } from './types';

export const UiBadge: FC<UiBadgeProps> = (props) => {
	return <Root {...props} />;
};
