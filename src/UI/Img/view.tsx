import { FC, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { UiImgProps } from './types';
import { classes } from './styled';

export const UiImgUnstyled: FC<UiImgProps> = ({
	src,
	srcWebp,
	src2xWebp,
	srcSmall,
	srcSmallWebp,
	alt,
	width,
	height,
	className,
	effect,
	loading,
	...props
}) => {
	const [load, setLoad] = useState(false);
	const defaultImage = '/images/no-image.svg';

	return (
		<picture
			className={clsx(className, {
				[classes.load]: load,
				[classes.effect]: effect
			})}
		>
			{srcSmallWebp ? <source srcSet={srcSmallWebp} media={'(max-width: 899px)'} type={'image/webp'} /> : null}
			{srcSmall ? <source srcSet={srcSmall} media={'(max-width: 899px)'} /> : null}
			{srcWebp ? (
				<source srcSet={src2xWebp ? `${srcWebp} 1x, ${src2xWebp} 2x` : srcWebp} type={'image/webp'} />
			) : null}
			<Image
				{...props}
				src={src || defaultImage}
				width={width || 0}
				height={height || 0}
				alt={alt || ''}
				onLoad={() => setLoad(true)}
				loading={loading || 'lazy'}
			/>
		</picture>
	);
};
