import { FC } from 'react';
import { Root } from './styled';
import { UiAlertTitleProps } from './types';

export const UiAlertTitle: FC<UiAlertTitleProps> = (props) => {
	return <Root {...props} />;
};
