import { FC } from 'react';
import { Root } from './styled';
import { UiRadioGroupProps } from './types';

export const UiRadioGroup: FC<UiRadioGroupProps> = (props) => {
	return <Root {...props} />;
};
