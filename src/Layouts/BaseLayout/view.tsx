import { FC } from 'react';
import { PageDataProvider } from 'Services/PageData';
import { BaseLayoutProps } from './types';
import { Root, classes } from './styled';
import { Header } from 'Components/Header';
import { Footer } from 'Components/Footer';

export const config = {
	runtime: 'edge',
};

export const BaseLayout: FC<BaseLayoutProps> = ({ children, ...props }) => {
	return (
		<PageDataProvider {...props}>
			<Root>
				<header className={classes.header}>
					<Header />
				</header>
				<main className={classes.body}>{children}</main>
				<footer className={classes.footer}>
					<Footer />
				</footer>
			</Root>
		</PageDataProvider>
	);
};
