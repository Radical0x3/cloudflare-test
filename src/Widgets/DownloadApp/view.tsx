import { FC } from 'react';
import { Root, classes } from './styled';
import { DownloadAppProps } from './types';
import { UiContainer } from 'UI/Container';
import { useI18n } from 'Services/I18n';
import { UiGrid } from 'UI/Grid';
import { UiGridItem } from 'UI/GridItem';
import { UiTypography } from 'UI/Typography';
import { UiButton } from 'UI/Button';
import { UiImg } from 'UI/Img';
import { UiBox } from 'UI/Box';
import { APP_STORE_URL, GOOGLE_PLAY_URL } from 'Constants/index';

export const DownloadApp: FC<DownloadAppProps> = () => {
	const i18n = useI18n();

	return (
		<Root id={'download-app'}>
			<UiContainer>
				<UiBox position={'relative'} zIndex={1}>
					<UiGrid spacing={{ xs: 3, md: 4 }} justifyContent={'center'} pb={{ xs: 3, md: 6 }}>
						<UiGridItem xs={12} md={9}>
							<UiTypography component={'h2'} variant={'h2'} color={'secondary.main'} textAlign={'center'}>
								{i18n('download-app__title')}
							</UiTypography>
						</UiGridItem>
						<UiGridItem xs={12} md={6}>
							<UiTypography color={'secondary.main'} textAlign={'center'}>
								{i18n('download-app__subtitle')}
							</UiTypography>
						</UiGridItem>
					</UiGrid>
					<UiGrid spacing={{ xs: 2, md: 4 }} justifyContent={'center'} pt={{ xs: 1, md: 2 }}>
						<UiGridItem xs={12} sm={'auto'}>
							<UiButton
								size={'large'}
								color={'secondary'}
								fullWidth={true}
								href={APP_STORE_URL}
								target={'_blank'}
							>
								<UiImg
									src={'/images/app-store.svg'}
									width={152}
									height={50}
									alt={'Download on the App Store'}
								/>
							</UiButton>
						</UiGridItem>
						<UiGridItem xs={12} sm={'auto'}>
							<UiButton
								size={'large'}
								color={'secondary'}
								fullWidth={true}
								href={GOOGLE_PLAY_URL}
								target={'_blank'}
							>
								<UiImg
									src={'/images/google-play.svg'}
									width={155}
									height={50}
									alt={'Get it on Google Play'}
								/>
							</UiButton>
						</UiGridItem>
					</UiGrid>
					<div className={classes.imageContainer}>
						<UiImg
							src={'/images/download-app/phone.png'}
							srcWebp={'/images/download-app/phone.webp'}
							width={1240}
							height={465}
							alt={'phone image'}
							className={classes.image}
						/>
						<UiImg
							src={'/images/download-app/stars.svg'}
							width={1240}
							height={178}
							className={classes.stars}
							alt={'stars image'}
						/>
					</div>
				</UiBox>
			</UiContainer>
		</Root>
	);
};
