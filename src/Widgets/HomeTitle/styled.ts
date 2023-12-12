import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('home-title'),
	container: HashService.className('home-title__container'),
	content: HashService.className('home-title__content'),
	decor: HashService.className('home-title__decor'),
	title: HashService.className('home-title__title')
};

export const Root = styled('div', { label: classes.root })`
	position: relative;

	&::after {
		content: '';
		position: absolute;
		top: -100px;
		right: 0;
		width: 100%;
		height: calc(100% + 100px);
		background: ${({ theme }) => theme.palette.gradient.blue};
		clip-path: polygon(100% 0, 100% 100%, 74% 92%, 0 100%, 0 0);

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			clip-path: polygon(100% 0, 100% 100%, 75% 75%, 0 100%, 0 0);
		}
	}

	.${classes.container} {
		max-width: 1920px;
		display: flex;
		align-items: center;
		padding: 20px 0 0;
		position: relative;
		margin: 0 auto;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			min-height: min(calc(760 / 1440 * 100vw), 760px);
			padding: 0 0 80px;
		}

		@media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
			padding: 0 0 100px;
		}
	}

	.${classes.content} {
		position: relative;
		z-index: 2;
	}

	.${classes.title} {
		color: ${({ theme }) => theme.palette.primary.contrastText};
		margin-bottom: 16px;
		text-align: center;

		span {
			color: ${({ theme }) => theme.palette.warning.main};
		}

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			margin-bottom: 32px;
			text-align: left;
		}
	}

	.${classes.decor} {
		max-width: 320px;
		height: 361px;
		padding-top: 20px;
		overflow: hidden;
		position: relative;
		margin: 0 auto;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			position: absolute;
			top: 0;
			right: 0;
			width: 100%;
			max-width: 1440px;
			height: min(calc(760 / 1440 * 100vw), 760px);
			padding-top: 0;
			overflow: visible;
		}
	}
`;
