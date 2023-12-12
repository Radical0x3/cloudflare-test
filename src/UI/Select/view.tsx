import { FC } from 'react';
import { MenuListProps } from '@mui/material/MenuList';
import { PaperProps } from '@mui/material/Paper';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { PlainObject } from 'Interfaces/PlainObject';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { UiPaper } from 'UI/Paper';
import { UiMenuList } from 'UI/MenuList';
import { UiMenuItem } from 'UI/MenuItem';
import { UiSelectProps } from './types';
import { Root } from './styled';

export const UiSelect: FC<UiSelectProps> = ({ options, variant = 'outlined', label, ...props }) => {
	const paperProps: Partial<PaperProps<'div', PlainObject>> = {
		component: UiPaper
	};

	const menuListProps: Partial<MenuListProps<'ul', PlainObject>> = {
		component: UiMenuList
	};

	return (
		<Root variant={variant}>
			{label ? <InputLabel disabled={props.disabled}>{props.required ? `${label} *` : label}</InputLabel> : null}
			<Select
				IconComponent={KeyboardArrowDownIcon}
				label={label}
				{...props}
				MenuProps={{
					PaperProps: paperProps,
					MenuListProps: menuListProps
				}}
			>
				{options.map(({ value, label, disabled }, index) => (
					<UiMenuItem
						value={value}
						disabled={disabled}
						className={props.multiple ? '_multiple-select' : '_single-select'}
						key={index}
					>
						{label}
					</UiMenuItem>
				))}
			</Select>
		</Root>
	);
};
