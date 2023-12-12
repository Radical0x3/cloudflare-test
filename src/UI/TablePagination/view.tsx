import { FC } from 'react';
import { Root } from './styled';
import { UiTablePaginationProps } from './types';
import { PaperProps } from '@mui/material/Paper';
import { PlainObject } from 'Interfaces/PlainObject';
import { UiPaper } from 'UI/Paper';
import { MenuListProps } from '@mui/material/MenuList';
import { UiMenuList } from 'UI/MenuList';

export const UiTablePagination: FC<UiTablePaginationProps> = (props) => {
	const paperProps: Partial<PaperProps<'div', PlainObject>> = {
		component: UiPaper
	};

	const menuListProps: Partial<MenuListProps<'ul', PlainObject>> = {
		component: UiMenuList
	};

	return (
		<Root
			{...props}
			SelectProps={{
				MenuProps: {
					PaperProps: paperProps,
					MenuListProps: menuListProps
				}
			}}
		/>
	);
};
