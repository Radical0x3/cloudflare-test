import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('wysiwyg-block'),
	container: HashService.className('wysiwyg-block__container')
};

export const Root = styled('div', { label: classes.root })`
	padding: 20px 0 10px;

	@media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
		padding: 80px 0 50px;
	}

	.${classes.container} {
		padding-bottom: 40px;
		border-bottom: 1px solid ${({ theme }) => theme.palette.divider};

		@media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
			padding-bottom: 100px;
		}
	}
`;
