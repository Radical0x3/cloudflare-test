import { FC } from 'react';
import { Root } from './styled';
import { AppStoreButtonProps } from './types';
import { APP_STORE_URL } from 'Constants/index';
import { UiImg } from 'UI/Img';

export const AppStoreButton: FC<AppStoreButtonProps> = (props) => {
	return (
		<Root size={'large'} color={'secondary'} fullWidth={true} href={APP_STORE_URL} target={'_blank'} {...props}>
			<UiImg src={'/images/app-store.svg'} width={152} height={50} alt={'Download on the App Store'} />
		</Root>
	);
};
