import { FC } from 'react';
import { Root } from './styled';
import { UiCircularProgressProps } from './types';

export const UiCircularProgress: FC<UiCircularProgressProps> = (props) => {
	return <Root {...props} />;
};
