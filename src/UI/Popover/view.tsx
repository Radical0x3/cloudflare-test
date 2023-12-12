import { FC } from 'react';
import { Root, classes } from './styled';
import { UiPopoverProps } from './types';
import { UiPaper } from 'UI/Paper';
import { PaperProps } from '@mui/material/Paper';
import { PlainObject } from 'Interfaces/PlainObject';
import clsx from 'clsx';

export const UiPopover: FC<UiPopoverProps> = ({ size, className, ...props }) => {
	const paperProps: Partial<PaperProps<'div', PlainObject>> = {
		component: UiPaper
	};

	return <Root {...props} className={clsx(className, { [classes.sizeXs]: size === 'xs' })} PaperProps={paperProps} />;
};
