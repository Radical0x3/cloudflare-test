import { FC } from 'react';
import clsx from 'clsx';
import { UiMenuItemProps } from './types';
import { Root } from './styled';
import { MUI_EMPTY_CLASS_NAME } from 'Services/Theme/constants';

export const UiMenuItem: FC<UiMenuItemProps> = ({ empty, className, ...props }) => {
	return (
		<Root
			{...props}
			className={clsx(className, {
				[MUI_EMPTY_CLASS_NAME]: empty
			})}
		/>
	);
};
