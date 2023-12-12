import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('error-layout'),
	header: HashService.className('error-layout__header'),
	body: HashService.className('error-layout__body')
};

export const Root = styled('div', { label: classes.root })`
	display: flex;
	flex-direction: column;
	min-height: 100%;
	background: ${({ theme }) => theme.palette.gradient.blue};

	.${classes.header} {
		flex-shrink: 0;
		position: relative;
		z-index: 20;
	}

	.${classes.body} {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		position: relative;
		z-index: 10;
	}
`;
