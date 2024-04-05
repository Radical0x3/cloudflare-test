import { FC } from 'react';
import { Root, classes } from './styled';
import { HomeFeaturesProps } from './types';
import { UiContainer } from 'UI/Container';
import { UiGrid } from 'UI/Grid';
import { UiGridItem } from 'UI/GridItem';
import { useI18n } from 'Services/I18n';
import { UiTypography } from 'UI/Typography';
import { Planet1Icon } from 'Icons/planets/planet1';
import { Planet2Icon } from 'Icons/planets/planet2';
import { Planet3Icon } from 'Icons/planets/planet3';
import { Planet4Icon } from 'Icons/planets/planet4';
import { Planet5Icon } from 'Icons/planets/planet5';
import { Planet6Icon } from 'Icons/planets/planet6';
import clsx from 'clsx';

export const HomeFeatures: FC<HomeFeaturesProps> = () => {
	const i18n = useI18n();
	const items = [
		{
			title: i18n('home-features__feature1-title'),
			text: i18n('home-features__feature1-text'),
			icon: <Planet1Icon />
		},
		{
			title: i18n('home-features__feature2-title'),
			text: i18n('home-features__feature2-text'),
			icon: <Planet2Icon />
		},
		{
			title: i18n('home-features__feature3-title'),
			text: i18n('home-features__feature3-text'),
			icon: <Planet3Icon />
		},
		{
			title: i18n('home-features__feature4-title'),
			text: i18n('home-features__feature4-text'),
			icon: <Planet4Icon />
		},
		{
			title: i18n('home-features__feature5-title'),
			text: i18n('home-features__feature5-text'),
			icon: <Planet5Icon />
		},
		{
			title: i18n('home-features__feature6-title'),
			text: i18n('home-features__feature6-text'),
			icon: <Planet6Icon />
		}
	];

	return (
		<Root id={'home-features'}>
			<UiContainer>
				<UiGrid spacing={{ xs: 3, md: 4 }}>
					<UiGridItem xs={12} md={5} lg={6}>
						<UiTypography
							component={'h2'}
							variant={'h2'}
							color={'secondary.main'}
							mb={{ xs: 3, md: 4 }}
							pt={{ md: 6 }}
						>
							{i18n('home-features__title')}
						</UiTypography>
						<UiTypography className={classes.text}>{i18n('home-features__text')}</UiTypography>
					</UiGridItem>
					<UiGridItem xs={12} md={7} lg={6}>
						<UiGrid spacing={{ xs: 2, md: 3 }}>
							{items.map((item, index) => (
								<UiGridItem xs={6} sm={4} key={index}>
									<div className={clsx(classes.item, { [classes.itemShadow]: index === 0 })}>
										{item.icon}
										<UiTypography variant={'h5'} color={'primary.contrastText'} my={2}>
											{item.title}
										</UiTypography>
										<UiTypography variant={'body2'} color={'primary.contrastText'}>
											{item.text}
										</UiTypography>
									</div>
								</UiGridItem>
							))}
						</UiGrid>
					</UiGridItem>
				</UiGrid>
			</UiContainer>
		</Root>
	);
};
