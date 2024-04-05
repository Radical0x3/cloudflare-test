import { FC } from 'react';
import { Root } from './styled';
import { GooglePlayButtonProps } from './types';
import { GOOGLE_PLAY_URL } from 'Constants/index';
import { UiImg } from 'UI/Img';

export const GooglePlayButton: FC<GooglePlayButtonProps> = (props) => {
	return (
		<Root size={'large'} color={'secondary'} fullWidth={true} href={GOOGLE_PLAY_URL} target={'_blank'} {...props}>
			<UiImg src={'/images/google-play.svg'} width={155} height={50} alt={'Get it on Google Play'} />
		</Root>
	);
};
