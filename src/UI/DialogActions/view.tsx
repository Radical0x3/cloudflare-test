import { FC } from 'react';
import { Root } from './styled';
import { UiDialogActionsProps } from './types';

export const UiDialogActions: FC<UiDialogActionsProps> = (props) => {
	return <Root {...props} />;
};
