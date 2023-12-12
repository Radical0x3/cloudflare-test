import { FC } from 'react';
import { Root } from './styled';
import { UiDialogTitleProps } from './types';

export const UiDialogTitle: FC<UiDialogTitleProps> = (props) => {
	return <Root {...props} />;
};
