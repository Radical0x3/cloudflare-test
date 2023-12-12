import { FC } from 'react';
import { Root } from './styled';
import { UiTableContainerProps } from './types';

export const UiTableContainer: FC<UiTableContainerProps> = (props) => {
	return <Root {...props} />;
};
