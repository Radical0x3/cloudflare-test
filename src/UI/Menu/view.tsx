import { FC, forwardRef } from 'react';
import { MenuListProps } from '@mui/material/MenuList';
import { PlainObject } from 'Interfaces/PlainObject';
import { UiMenuList } from 'UI/MenuList';
import { UiMenuProps } from './types';
import { Root } from './styled';

export const UiMenu: FC<UiMenuProps> = forwardRef((props, ref) => {
	const menuListProps: Partial<MenuListProps<'ul', PlainObject>> = {
		component: UiMenuList
	};

	return <Root {...props} ref={ref} MenuListProps={menuListProps} />;
});
