import { FC } from 'react';
import { Root } from './styled';
import { UiSwitchProps } from './types';

export const UiSwitch: FC<UiSwitchProps> = (props) => {
	return <Root {...props} />;
};
