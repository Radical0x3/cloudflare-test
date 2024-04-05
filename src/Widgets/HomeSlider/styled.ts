import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('home-slider'),
	list: HashService.className('home-slider__list')
};

export const Root = styled('div', { label: classes.root })`
	padding: 32px 0 25px;
	min-height: 275px;
	margin-top: -1px;
	position: relative;
	overflow-x: hidden;

	@media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
		padding: 40px 0;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
		padding: 60px 0;
		min-height: 445px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
		padding: 70px 0;
		min-height: 573px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.values.xl}px) {
		padding: 85px 0;
	}

	@media (min-width: 1921px) {
		padding: 145px 0 130px;
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		padding-top: ${(149 / 360) * 100}%;
		background-color: ${({ theme }) => theme.palette.primary.main};
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 70%);

		@media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
			padding-top: ${(396 / 1440) * 100}%;
		}
	}

	.${classes.list} {
		transform: rotate(-4.439deg);
		margin: 0 -10px;
		position: relative;
		z-index: 1;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			margin: 0 -140px;
		}

		@media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
		}
	}

	.swiper-wrapper {
		box-sizing: border-box;
	}

	.swiper-slide {
		width: 101px;
		box-sizing: border-box;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			width: 150px;
		}

		@media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
			width: 200px;
		}
	}
`;
