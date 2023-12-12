import { FC } from 'react';
import { Root } from './styled';
import { UiModalProps } from './types';

export const UiModal: FC<UiModalProps> = (props) => {
	return <Root {...props} />;
};
