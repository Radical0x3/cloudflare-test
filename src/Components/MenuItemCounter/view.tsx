import { FC } from 'react';
import { Root } from './styled';
import { MenuItemCounterProps } from './types';

export const MenuItemCounter: FC<MenuItemCounterProps> = ({ counter }) => {
	return !!counter ? <Root>{counter}</Root> : null;
};
