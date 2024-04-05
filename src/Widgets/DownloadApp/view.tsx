import { FC } from 'react';
import { Root, classes } from './styled';
import { DownloadAppProps } from './types';
import { UiContainer } from 'UI/Container';
import { useI18n } from 'Services/I18n';
import { UiGrid } from 'UI/Grid';
import { UiGridItem } from 'UI/GridItem';
import { UiTypography } from 'UI/Typography';
import { UiImg } from 'UI/Img';
import { UiBox } from 'UI/Box';
import { APP_STORE_URL, GOOGLE_PLAY_URL } from 'Constants/index';
import { GooglePlayButton } from 'Components/GooglePlayButton';
import { AppStoreButton } from 'Components/AppStoreButton';

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
						{APP_STORE_URL ? (
							<UiGridItem xs={12} sm={'auto'}>
								<AppStoreButton />
							</UiGridItem>
						) : null}
						{GOOGLE_PLAY_URL ? (
							<UiGridItem xs={12} sm={'auto'}>
								<GooglePlayButton />
							</UiGridItem>
						) : null}
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
