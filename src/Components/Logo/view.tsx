import { FC } from 'react';
import { useRouter } from 'next/router';
import { RoutesService } from 'Services/Routes';
import { UiLinkUnstyled } from 'UI/Link';
import { Root, classes } from './styled';
import { LogoProps } from './types';
import { LogoIcon } from 'Icons/common/logo';
import clsx from 'clsx';

export const Logo: FC<LogoProps> = ({ size }) => {
	const { pathname } = useRouter();

	return (
		<Root className={clsx({ [classes.sizeSmall]: size === 'small' })}>
			{pathname !== RoutesService._homepage.asPath() ? (
				<UiLinkUnstyled
					href={RoutesService._homepage.pathname}
					asPath={RoutesService._homepage.asPath()}
					className={classes.link}
				>
					<span className={classes.image}>
						<LogoIcon />
					</span>
				</UiLinkUnstyled>
			) : (
				<div className={classes.link}>
					<span className={classes.image}>
						<LogoIcon />
					</span>
				</div>
			)}
		</Root>
	);
};
