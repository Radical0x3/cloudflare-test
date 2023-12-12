import { FC } from 'react';
import { PageDataProvider } from 'Services/PageData';
import { ErrorLayoutProps } from './types';
import { Root, classes } from './styled';
import { Header } from 'Components/Header';

export const ErrorLayout: FC<ErrorLayoutProps> = ({ children, ...props }) => {
	return (
		<PageDataProvider {...props}>
			<Root>
				<header className={classes.header}>
					<Header withoutMenu={true} />
				</header>
				<main className={classes.body}>{children}</main>
			</Root>
		</PageDataProvider>
	);
};
