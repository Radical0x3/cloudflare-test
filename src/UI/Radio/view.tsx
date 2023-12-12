import { FC } from 'react';
import { Root } from './styled';
import { UiRadioProps } from './types';

export const UiRadio: FC<UiRadioProps> = (props) => {
	return <Root {...props} />;
};
