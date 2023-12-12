import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('home-functions'),
	image: HashService.className('home-functions__image'),
	imageContainer: HashService.className('home-functions__image-container'),
	stars: HashService.className('home-functions__stars'),
	circles: HashService.className('home-functions__circles'),
	lights: HashService.className('home-functions__lights')
};

export const Root = styled('div', { label: classes.root })`
	padding: 130px 0 20px;
	background-color: ${({ theme }) => theme.palette.primary.main};
	margin-top: -91px;
	position: relative;
	overflow: hidden;

	@media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
		padding: 153px 0 100px;
		margin-top: -88px;
	}

	.${classes.imageContainer} {
		max-width: 402px;
		margin: 0 auto;
	}

	.${classes.image} {
		padding-top: ${(522 / 402) * 100}%;
		position: relative;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
			padding-top: 100%;
		}

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			padding-top: ${(522 / 402) * 100}%;
			margin-bottom: 12px;
		}

		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: scale-down;
		}
	}

	.${classes.stars} {
		position: absolute;
		top: 186px;
		left: 50%;
		transform: translateX(-50%);

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			top: 238px;
		}

		img {
			max-width: 1310px;
			width: 1310px;
			height: 627px;
		}
	}

	.${classes.circles} {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			display: none;
		}

		img {
			max-width: 1207px;
			width: 1207px;
			height: 1203px;
		}
	}

	.${classes.lights} {
		display: none;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			display: block;
			position: absolute;
			top: 258px;
			left: 50%;
			transform: translateX(-50%);
		}

		img {
			max-width: 707px;
			width: calc(707 / 1440 * 100vw);
		}
	}
`;
