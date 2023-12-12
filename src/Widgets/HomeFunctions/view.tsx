import { FC } from 'react';
import { Root, classes } from './styled';
import { HomeFunctionsProps } from './types';
import { UiContainer } from 'UI/Container';
import { useI18n } from 'Services/I18n';
import { UiGrid } from 'UI/Grid';
import { UiGridItem } from 'UI/GridItem';
import { UiTypography } from 'UI/Typography';
import { UiImg } from 'UI/Img';
import { UiBox } from 'UI/Box';

export const HomeFunctions: FC<HomeFunctionsProps> = () => {
	const i18n = useI18n();
	const items = [
		{
			title: i18n('home-functions__function1-title'),
			text: i18n('home-functions__function1-text'),
			image: '/images/home-functions/chat.png',
			imageWebp: '/images/home-functions/chat.webp'
		},
		{
			title: i18n('home-functions__function2-title'),
			text: i18n('home-functions__function2-text'),
			image: '/images/home-functions/gallery.png',
			imageWebp: '/images/home-functions/gallery.webp'
		},
		{
			title: i18n('home-functions__function3-title'),
			text: i18n('home-functions__function3-text'),
			image: '/images/home-functions/calendar.png',
			imageWebp: '/images/home-functions/calendar.webp'
		}
	];

	return (
		<Root id={'home-functions'}>
			<UiContainer>
				<UiImg
					src={'/images/home-functions/lights.png'}
					srcWebp={'/images/home-functions/lights.webp'}
					width={707}
					height={629}
					className={classes.lights}
					alt={'lights image'}
				/>
				<UiImg
					src={'/images/home-functions/circles.png'}
					srcWebp={'/images/home-functions/circles.webp'}
					width={1207}
					height={1203}
					className={classes.circles}
					alt={'circles image'}
				/>
				<UiImg
					src={'/images/home-functions/stars.png'}
					srcWebp={'/images/home-functions/stars.webp'}
					width={1310}
					height={627}
					className={classes.stars}
					alt={'stars image'}
				/>
				<UiGrid
					spacing={{ xs: 3, md: 4 }}
					justifyContent={'center'}
					pb={{ xs: 5, md: 6 }}
					position={'relative'}
					zIndex={2}
				>
					<UiGridItem xs={12}>
						<UiTypography
							component={'h2'}
							variant={'h2'}
							color={'primary.contrastText'}
							textAlign={'center'}
						>
							{i18n('home-functions__title')}
						</UiTypography>
					</UiGridItem>
					<UiGridItem xs={12} sm={9} lg={6}>
						<UiTypography color={'primary.contrastText'} textAlign={'center'}>
							{i18n('home-functions__text')}
						</UiTypography>
					</UiGridItem>
				</UiGrid>
				<UiGrid spacing={4} pt={{ md: 3 }} justifyContent={'center'} position={'relative'} zIndex={2}>
					{items.map((item, index) => (
						<UiGridItem xs={12} sm={6} md={4} key={index}>
							<div className={classes.imageContainer}>
								<UiImg
									src={item.image}
									srcWebp={item.imageWebp}
									width={402}
									height={522}
									alt={item.title}
									className={classes.image}
								/>
							</div>
							<UiBox px={{ md: 5 }} textAlign={'center'}>
								<UiTypography variant={'h4'} color={'primary.contrastText'} mb={2}>
									{item.title}
								</UiTypography>
								<UiTypography color={'text.secondary'}>{item.text}</UiTypography>
							</UiBox>
						</UiGridItem>
					))}
				</UiGrid>
			</UiContainer>
		</Root>
	);
};
