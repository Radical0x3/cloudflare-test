import { FC } from 'react';
import { UiGrid } from 'UI/Grid';
import { UiGridItem } from 'UI/GridItem';
import { Logo } from 'Components/Logo';
import { Root } from './styled';
import { HeaderProps } from './types';
import { UiContainer } from 'UI/Container';
import { MainMenu } from 'Components/MainMenu';

export const Header: FC<HeaderProps> = ({ withoutMenu = false }) => {
	return (
		<Root id={'header'}>
			<UiContainer>
				<UiGrid
					spacing={2}
					flexWrap={'nowrap'}
					justifyContent={{ xs: 'center', md: 'space-between' }}
					alignItems={'center'}
				>
					<UiGridItem>
						<Logo />
					</UiGridItem>
					{!withoutMenu && (
						<UiGridItem className={'_md-show'}>
							<MainMenu />
						</UiGridItem>
					)}
				</UiGrid>
			</UiContainer>
		</Root>
	);
};
