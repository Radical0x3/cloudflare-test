import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('home-features'),
	text: HashService.className('home-features__text'),
	item: HashService.className('home-features__item'),
	itemShadow: HashService.className('home-features__item--shadow')
};

export const Root = styled('div', { label: classes.root })`
	padding: 20px 0 0;

	@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
		padding: 80px 0 0;
	}

	.${classes.text} {
		@media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
			max-width: 85%;
		}
	}

	.${classes.item} {
		height: 100%;
		padding: 16px;
		border-radius: 16px;
		background: ${({ theme }) => theme.palette.gradient.purple};

		@media (min-width: 1280px) {
			padding: 30px;
			border-radius: 30px;
		}

		svg {
			font-size: 38px;
			color: ${({ theme }) => theme.palette.warning.main};
		}

		&.${classes.itemShadow} {
			box-shadow: ${({ theme }) => theme.shadows[2]};
		}
	}
`;
