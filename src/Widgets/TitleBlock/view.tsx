import { FC } from 'react';
import { Root, classes } from './styled';
import { TitleBlockProps } from './types';
import { UiContainer } from 'UI/Container';
import { UiGrid } from 'UI/Grid';
import { UiGridItem } from 'UI/GridItem';
import { UiTypography } from 'UI/Typography';
import { UiImg } from 'UI/Img';

export const TitleBlock: FC<TitleBlockProps> = ({ title, subtitle }) => {
	return (
		<Root>
			<UiContainer>
				<div className={classes.container}>
					<UiGrid spacing={3} justifyContent={'center'} textAlign={'center'}>
						<UiGridItem xs={12} lg={8}>
							<UiTypography component={'h2'} variant={'h2'} color={'primary.contrastText'}>
								{title}
							</UiTypography>
						</UiGridItem>
						{subtitle ? (
							<UiGridItem xs={12} lg={6}>
								<UiTypography color={'text.secondary'}>{subtitle}</UiTypography>
							</UiGridItem>
						) : null}
					</UiGrid>
				</div>
			</UiContainer>
			<UiImg src={'/images/title-block/stars.svg'} width={1440} height={342} className={classes.stars} />
		</Root>
	);
};
