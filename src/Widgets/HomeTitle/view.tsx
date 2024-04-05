import { FC, useEffect, useState } from 'react';
import { Root, classes } from './styled';
import { HomeTitleProps } from './types';
import { UiContainer } from 'UI/Container';
import { useI18n } from 'Services/I18n';
import { UiGrid } from 'UI/Grid';
import { UiGridItem } from 'UI/GridItem';
import { UiTypography } from 'UI/Typography';
import { HomeDecor } from './components/HomeDecor';
import { useInView } from 'react-intersection-observer';
import { APP_STORE_URL, GOOGLE_PLAY_URL } from 'Constants/index';
import { GooglePlayButton } from 'Components/GooglePlayButton';
import { AppStoreButton } from 'Components/AppStoreButton';

export const HomeTitle: FC<HomeTitleProps> = () => {
	const i18n = useI18n();
	const [animating, setAnimating] = useState(false);
	const [ref, isVisible] = useInView();

	useEffect(() => {
		if (isVisible) {
			if (!animating) {
				setAnimating(true);
			}
		}
	}, [isVisible, animating]);

	return (
		<Root>
			<div className={classes.container}>
				<UiContainer>
					<div className={classes.content} ref={ref}>
						<UiGrid>
							<UiGridItem xs={12} md={5}>
								<h1 hidden>
									{`${i18n('home-title__title1')} ${i18n('home-title__title2')} ${i18n(
										'home-title__title3'
									)}`}
								</h1>
								<UiTypography variant={'h1'} className={classes.title}>
									{i18n('home-title__title1')} <span>{i18n('home-title__title2')}</span>{' '}
									{i18n('home-title__title3')}
								</UiTypography>
								<UiTypography
									variant={'subtitle1'}
									color={'primary.contrastText'}
									textAlign={{ xs: 'center', md: 'left' }}
									mb={{ xs: 3, md: 5 }}
								>
									{i18n('home-title__subtitle')}
								</UiTypography>
								<UiGrid spacing={{ xs: 2, lg: 4 }} justifyContent={{ xs: 'center', md: 'flex-start' }}>
									{APP_STORE_URL ? (
										<UiGridItem xs={12} sm={'auto'} md={6} xl={'auto'}>
											<AppStoreButton />
										</UiGridItem>
									) : null}
									{GOOGLE_PLAY_URL ? (
										<UiGridItem xs={12} sm={'auto'} md={6} xl={'auto'}>
											<GooglePlayButton />
										</UiGridItem>
									) : null}
								</UiGrid>
							</UiGridItem>
						</UiGrid>
					</div>
					<div className={classes.decor}>
						<HomeDecor animating={animating} />
					</div>
				</UiContainer>
			</div>
		</Root>
	);
};
