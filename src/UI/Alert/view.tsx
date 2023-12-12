import { FC } from 'react';
import { Root } from './styled';
import { UiAlertProps } from './types';

export const UiAlert: FC<UiAlertProps> = (props) => {
	return <Root {...props} />;
};
