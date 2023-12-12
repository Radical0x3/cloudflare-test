import { FC } from 'react';
import { classes, NoDataIcon, Root } from './styled';
import { NoDataProps } from './types';
import { UiBox } from 'UI/Box';
import { UiTypography } from 'UI/Typography';
import clsx from 'clsx';

export const NoData: FC<NoDataProps> = ({ ts, size = 'default' }) => {
	return (
		<Root>
			<UiBox className={classes.wrapper}>
				<UiBox
					className={clsx(classes.icon, {
						[classes[size]]: true
					})}
				>
					<NoDataIcon />
				</UiBox>
				<UiTypography variant={'h4'} color={'grey.500'} marginTop={3}>
					{ts}
				</UiTypography>
			</UiBox>
		</Root>
	);
};
