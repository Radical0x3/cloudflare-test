import { ImageProps } from 'next/dist/shared/lib/get-img-props';

export interface UiImgProps extends Omit<ImageProps, 'src' | 'alt'> {
	src?: string | null;
	srcWebp?: string | null;
	src2xWebp?: string | null;
	srcSmall?: string | null;
	srcSmallWebp?: string | null;
	alt?: string | null;
	width?: number;
	height?: number;
	effect?: boolean;
}
