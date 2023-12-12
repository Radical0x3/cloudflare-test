import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('main-menu'),
	item: HashService.className('main-menu__item')
};

export const Root = styled('div', { label: classes.root })`
	.${classes.item} {
		padding: 10px;
		color: ${({ theme }) => theme.palette.primary.contrastText};
		cursor: pointer;
		transition: 0.3s;

		@media (hover: hover) {
			&:hover {
				color: ${({ theme }) => theme.palette.warning.main};
			}
		}
	}
`;
