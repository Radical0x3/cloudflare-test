import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('home-decor'),
	animating: HashService.className('home-decor--animating'),
	profile: HashService.className('home-decor__profile'),
	chat: HashService.className('home-decor__chat'),
	signs: HashService.className('home-decor__signs'),
	tips: HashService.className('home-decor__tips'),
	match: HashService.className('home-decor__match'),
	circles: HashService.className('home-decor__circles'),
	stars: HashService.className('home-decor__stars'),
	lights: HashService.className('home-decor__lights')
};

export const Root = styled('div', { label: classes.root })`
	overflow: hidden;

	&.${classes.animating} {
		.${classes.profile} {
			animation-name: homePhone1;
		}

		.${classes.chat} {
			animation-name: homePhone2;
		}

		.${classes.match} {
			animation-name: homeDecor1;
		}
	}

	.${classes.profile} {
		position: absolute;
		top: 24px;
		left: -35px;
		width: 299px;
		z-index: 2;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			width: ${(704 / 1440) * 100}%;
			top: -${(31 / 760) * 100}%;
			left: ${(498 / 1440) * 100}%;
			animation-duration: 2s;
			animation-delay: 1s;
			animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			animation-fill-mode: forwards;
		}

		img {
			width: 100%;
		}
	}

	.${classes.chat} {
		position: absolute;
		top: 38px;
		right: -58px;
		width: 338px;
		z-index: 3;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			width: ${(635 / 1440) * 100}%;
			top: ${(10 / 760) * 100}%;
			right: 0;
			animation-duration: 2s;
			animation-delay: 1s;
			animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			animation-fill-mode: forwards;
		}

		img {
			width: 100%;
		}
	}

	.${classes.signs} {
		position: absolute;
		top: 126px;
		left: 7px;
		width: 78px;
		z-index: 2;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			top: ${(224 / 760) * 100}%;
			left: ${(648 / 1440) * 100}%;
			width: ${(185 / 1440) * 100}%;
		}

		img {
			width: 100%;
			border-radius: 8px;
			backdrop-filter: blur(5.949999809265137px);

			@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
				border-radius: ${(20 / 185) * 100}px;
			}
		}
	}

	.${classes.tips} {
		position: absolute;
		bottom: 48px;
		left: 40px;
		width: 122px;
		z-index: 2;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			bottom: ${(128 / 760) * 100}%;
			left: ${(728 / 1440) * 100}%;
			width: ${(289 / 1440) * 100}%;
		}

		img {
			width: 100%;
			border-radius: 8px;
			backdrop-filter: blur(5.949999809265137px);

			@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
				border-radius: ${(24 / 289) * 100}px;
			}
		}
	}

	.${classes.match} {
		position: absolute;
		top: 147px;
		right: 0;
		width: 116px;
		z-index: 3;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			top: ${(271 / 760) * 100}%;
			right: ${(56 / 1440) * 100}%;
			width: ${(274 / 1440) * 100}%;
			animation-duration: 2s;
			animation-delay: 1s;
			animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			animation-fill-mode: forwards;
		}

		img {
			width: 100%;
		}
	}

	.${classes.circles} {
		position: absolute;
		width: 360px;
		top: 0;
		right: -20px;
		z-index: 1;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			top: -${(69 / 760) * 100}%;
			right: 0;
			width: ${(872 / 1440) * 100}%;
		}

		img {
			width: 100%;
		}
	}

	.${classes.stars} {
		position: absolute;
		width: 360px;
		top: -15px;
		right: -20px;
		z-index: 1;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			top: -${(100 / 760) * 100}%;
			right: ${(45 / 1440) * 100}%;
			width: ${(763 / 1440) * 100}%;
		}

		img {
			width: 100%;
		}
	}

	.${classes.lights} {
		position: absolute;
		width: 282px;
		top: 52px;
		right: 33px;
		z-index: 1;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			top: ${(41 / 760) * 100}%;
			right: ${(70 / 1440) * 100}%;
			width: ${(707 / 1440) * 100}%;
		}

		img {
			width: 100%;
		}
	}

	@keyframes homePhone1 {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(${(50 / 704) * 100}%);
		}
	}

	@keyframes homePhone2 {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(-${(80 / 635) * 100}%);
		}
	}

	@keyframes homeDecor1 {
		0% {
			transform: translate(0, 0);
		}

		100% {
			transform: translate(${(10 / 274) * 100}%, ${(5 / 278) * 100}%);
		}
	}
`;
