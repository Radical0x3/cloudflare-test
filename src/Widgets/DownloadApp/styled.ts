import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('download-app'),
	imageContainer: HashService.className('download-app__image-container'),
	image: HashService.className('download-app__image'),
	stars: HashService.className('download-app__stars')
};

export const Root = styled('div', { label: classes.root })`
	padding-top: 20px;
	margin-bottom: -1px;
	position: relative;

	@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
		padding-top: 50px;
	}

	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		padding-top: ${(254 / 1440) * 100}%;
		background-color: ${({ theme }) => theme.palette.primary.main};
		clip-path: polygon(73% 80%, 100% 0, 100% 100%, 55% 100%, 0 100%, 0 0);
	}

	.${classes.imageContainer} {
		max-width: 1240px;
		margin: 20px auto 0;
		position: relative;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			margin: 50px auto 0;
		}
	}

	.${classes.image} {
		padding-top: ${(432 / 1240) * 100}%;
		position: relative;
		overflow: visible;

		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 1;
		}
	}

	.${classes.stars} {
		display: none;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			display: block;
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			width: 100%;
			padding-top: ${(178 / 1240) * 100}%;
		}

		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
`;
