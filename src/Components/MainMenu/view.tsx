import { FC } from 'react';
import { Root, classes } from './styled';
import { MainMenuProps } from './types';
import { UiGridItem } from 'UI/GridItem';
import { UiGrid } from 'UI/Grid';
import { useI18n } from 'Services/I18n';
import { UiButton } from 'UI/Button';
import { scrollToElement } from 'Services/Util/methods';
import { UiTypography } from 'UI/Typography';
import { useRouter } from 'next/router';
import { UiLinkUnstyled } from 'UI/Link';
import { RoutesService } from 'Services/Routes';

export const MainMenu: FC<MainMenuProps> = () => {
	const i18n = useI18n();
	const { pathname } = useRouter();
	const isHomePage = pathname === RoutesService._homepage.asPath();

	return (
		<Root>
			<UiGrid spacing={6} alignItems={'center'}>
				<UiGridItem>
					<UiGrid spacing={5} flexWrap={'nowrap'} alignItems={'center'}>
						<UiGridItem>
							{!isHomePage ? (
								<UiLinkUnstyled
									href={{
										pathname: RoutesService._homepage.pathname,
										hash: 'home-features'
									}}
									asPath={{
										pathname: RoutesService._homepage.asPath(),
										hash: 'home-features'
									}}
									className={classes.item}
								>
									{i18n('main-menu__features')}
								</UiLinkUnstyled>
							) : (
								<UiTypography
									className={classes.item}
									onClick={() => scrollToElement('#home-features')}
								>
									{i18n('main-menu__features')}
								</UiTypography>
							)}
						</UiGridItem>
						<UiGridItem>
							{!isHomePage ? (
								<UiLinkUnstyled
									href={{
										pathname: RoutesService._homepage.pathname,
										hash: 'home-functions'
									}}
									asPath={{
										pathname: RoutesService._homepage.asPath(),
										hash: 'home-functions'
									}}
									className={classes.item}
								>
									{i18n('main-menu__functions')}
								</UiLinkUnstyled>
							) : (
								<UiTypography
									className={classes.item}
									onClick={() => scrollToElement('#home-functions')}
								>
									{i18n('main-menu__functions')}
								</UiTypography>
							)}
						</UiGridItem>
					</UiGrid>
				</UiGridItem>
				<UiGridItem>
					<UiButton onClick={() => scrollToElement('#download-app')}>{i18n('main-menu__download')}</UiButton>
				</UiGridItem>
			</UiGrid>
		</Root>
	);
};
