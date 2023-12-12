import { FC } from 'react';
import { Root, classes } from './styled';
import { HomeDecorProps } from './types';
import { UiImg } from 'UI/Img';
import clsx from 'clsx';

export const HomeDecor: FC<HomeDecorProps> = ({ animating }) => {
	return (
		<Root className={clsx({ [classes.animating]: !!animating })}>
			<UiImg
				src={'/images/home-title/profile.png'}
				srcWebp={'/images/home-title/profile.webp'}
				srcSmall={'/images/home-title/profile-small.png'}
				srcSmallWebp={'/images/home-title/profile-small.webp'}
				width={704}
				height={704}
				className={classes.profile}
				alt={'profile image'}
			/>
			<UiImg
				src={'/images/home-title/chat.png'}
				srcWebp={'/images/home-title/chat.webp'}
				srcSmall={'/images/home-title/chat-small.png'}
				srcSmallWebp={'/images/home-title/chat-small.webp'}
				width={635}
				height={798}
				className={classes.chat}
				alt={'chat image'}
			/>
			<UiImg
				src={'/images/home-title/signs.png'}
				srcWebp={'/images/home-title/signs.webp'}
				width={185}
				height={173}
				className={classes.signs}
				alt={'signs image'}
			/>
			<UiImg
				src={'/images/home-title/tips.png'}
				srcWebp={'/images/home-title/tips.webp'}
				width={289}
				height={176}
				className={classes.tips}
				alt={'tips image'}
			/>
			<UiImg
				src={'/images/home-title/match.png'}
				srcWebp={'/images/home-title/match.webp'}
				width={274}
				height={278}
				className={classes.match}
				alt={'match image'}
			/>
			<UiImg
				src={'/images/home-title/circles.png'}
				srcWebp={'/images/home-title/circles.webp'}
				width={872}
				height={850}
				className={classes.circles}
				alt={'circles image'}
			/>
			<UiImg
				src={'/images/home-title/stars.png'}
				srcWebp={'/images/home-title/stars.webp'}
				width={763}
				height={875}
				className={classes.stars}
				alt={'stars image'}
			/>
			<UiImg
				src={'/images/home-title/lights.png'}
				srcWebp={'/images/home-title/lights.webp'}
				width={707}
				height={707}
				className={classes.lights}
				alt={'lights image'}
			/>
		</Root>
	);
};
