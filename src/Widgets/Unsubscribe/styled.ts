import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('unsubscribe'),
	container: HashService.className('unsubscribe__container'),
	stars: HashService.className('unsubscribe__stars')
};

export const Root = styled('div', { label: classes.root })`
	padding: 59px 0 107px;
	position: relative;

	@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
		padding: 54px 0 154px;
	}

	&::after {
		content: '';
		position: absolute;
		top: -100px;
		right: 0;
		width: 100%;
		height: calc(100% + 100px);
		background: ${({ theme }) => theme.palette.gradient.blue};
		clip-path: polygon(100% 0, 100% 94%, 68% 100%, 0 94%, 0 0);

		@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
			clip-path: polygon(100% 0, 100% 82%, 74% 100%, 0 82%, 0 0);
		}
	}

	.${classes.container} {
		position: relative;
		z-index: 2;
	}

	.${classes.stars} {
		position: absolute;
		top: -100px;
		left: 0;
		width: 100%;
		height: 342px;
		z-index: 1;
		overflow-x: hidden;

		img {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			width: 1440px;
			height: 342px;
			max-width: 1440px;

			@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
				min-width: 1440px;
				width: 100%;
				height: 100%;
			}
		}
	}
`;
