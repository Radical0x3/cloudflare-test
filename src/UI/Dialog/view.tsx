import { FC } from 'react';
import { Root } from './styled';
import { UiDialogProps } from './types';
import { PaperProps } from '@mui/material';
import { PlainObject } from 'Interfaces/PlainObject';
import { UiPaper } from 'UI/Paper';

export const UiDialog: FC<UiDialogProps> = (props) => {
	const paperProps: Partial<PaperProps<'div', PlainObject>> = {
		component: UiPaper
	};

	return <Root {...props} PaperProps={paperProps} />;
};
