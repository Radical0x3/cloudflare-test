import { FC, useEffect, useState } from 'react';
import { Root, classes } from './styled';
import { HomeSliderProps } from './types';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { UiImg } from 'UI/Img';
import { FreeMode } from 'swiper/modules';
import { breakpointValues } from 'Services/Theme';

export const HomeSlider: FC<HomeSliderProps> = () => {
	const [show, setShow] = useState(false);
	const [ref, isVisible] = useInView();
	const [swiper, setSwiper] = useState<SwiperClass | null>(null);
	const images = [
		{
			url: '/images/home-slider/1.png',
			urlWebp: '/images/home-slider/1.webp'
		},
		{
			url: '/images/home-slider/2.png',
			urlWebp: '/images/home-slider/2.webp'
		},
		{
			url: '/images/home-slider/3.png',
			urlWebp: '/images/home-slider/3.webp'
		},
		{
			url: '/images/home-slider/4.png',
			urlWebp: '/images/home-slider/4.webp'
		},
		{
			url: '/images/home-slider/5.png',
			urlWebp: '/images/home-slider/5.webp'
		},
		{
			url: '/images/home-slider/6.png',
			urlWebp: '/images/home-slider/6.webp'
		},
		{
			url: '/images/home-slider/7.png',
			urlWebp: '/images/home-slider/7.webp'
		},
		{
			url: '/images/home-slider/8.png',
			urlWebp: '/images/home-slider/8.webp'
		},
		{
			url: '/images/home-slider/9.png',
			urlWebp: '/images/home-slider/9.webp'
		},
		{
			url: '/images/home-slider/10.png',
			urlWebp: '/images/home-slider/10.webp'
		},
		{
			url: '/images/home-slider/11.png',
			urlWebp: '/images/home-slider/11.webp'
		},
		{
			url: '/images/home-slider/12.png',
			urlWebp: '/images/home-slider/12.webp'
		},
		{
			url: '/images/home-slider/13.png',
			urlWebp: '/images/home-slider/13.webp'
		},
		{
			url: '/images/home-slider/14.png',
			urlWebp: '/images/home-slider/14.webp'
		},
		{
			url: '/images/home-slider/15.png',
			urlWebp: '/images/home-slider/15.webp'
		}
	];

	useEffect(() => {
		if (isVisible) {
			if (!show) {
				setShow(true);
			}
		}
	}, [swiper, isVisible, show]);

	return (
		<Root ref={ref}>
			{show ? (
				<div className={classes.list}>
					<Swiper
						loop={false}
						modules={[FreeMode]}
						freeMode={{
							enabled: true,
							sticky: false,
							momentumBounce: false
						}}
						slidesPerView={'auto'}
						spaceBetween={16}
						breakpoints={{
							1200: {
								spaceBetween: 40
							}
						}}
						onInit={(swiper) => {
							setSwiper(swiper);
							if (window.innerWidth >= breakpointValues.md) {
								setTimeout(() => {
									swiper.slideTo(images.length - 1, 5000);
								}, 1000);
							}
						}}
					>
						{images.map((image, index) => (
							<SwiperSlide key={index}>
								<UiImg
									src={image.url}
									srcWebp={image.urlWebp}
									width={200}
									height={433}
									alt={`slider image ${index + 1}`}
									loading={'eager'}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			) : null}
		</Root>
	);
};
