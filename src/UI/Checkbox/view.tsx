import { FC } from 'react';
import { Root } from './styled';
import { UiCheckboxProps } from './types';

export const UiCheckbox: FC<UiCheckboxProps> = (props) => {
	return <Root {...props} />;
};
