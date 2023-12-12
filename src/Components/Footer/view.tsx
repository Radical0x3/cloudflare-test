import { FC } from 'react';
import { UiContainer } from 'UI/Container';
import { UiGrid } from 'UI/Grid';
import { UiGridItem } from 'UI/GridItem';
import { UiTypography } from 'UI/Typography';
import { Root, classes } from './styled';
import { FooterProps } from './types';
import { Logo } from 'Components/Logo';
import { UiLinkUnstyled } from 'UI/Link';
import { useI18n } from 'Services/I18n';
import { RoutesService } from 'Services/Routes';

export const Footer: FC<FooterProps> = () => {
	const i18n = useI18n();

	return (
		<Root>
			<UiContainer>
				<UiGrid spacing={{ xs: 3, md: 5 }} alignItems={'center'}>
					<UiGridItem xs={12} md={4} display={'flex'} justifyContent={'center'}>
						<Logo size={'small'} />
					</UiGridItem>
					<UiGridItem xs={12} md={4}>
						<UiGrid spacing={5} justifyContent={'center'}>
							<UiGridItem>
								<UiLinkUnstyled
									href={RoutesService.privacyPolicy.pathname}
									asPath={RoutesService.privacyPolicy.asPath()}
									className={classes.link}
								>
									{i18n('footer__privacy-policy')}
								</UiLinkUnstyled>
							</UiGridItem>
							<UiGridItem>
								<UiLinkUnstyled
									href={RoutesService.userAgreement.pathname}
									asPath={RoutesService.userAgreement.asPath()}
									className={classes.link}
								>
									{i18n('footer__user-agreement')}
								</UiLinkUnstyled>
							</UiGridItem>
						</UiGrid>
					</UiGridItem>
					<UiGridItem xs={12} md={4}>
						<UiTypography color={'text.secondary'} textAlign={{ xs: 'center', md: 'right' }}>
							{i18n('footer__copyright', { year: new Date().getFullYear() })}
						</UiTypography>
					</UiGridItem>
				</UiGrid>
			</UiContainer>
		</Root>
	);
};
