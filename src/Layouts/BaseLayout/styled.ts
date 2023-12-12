import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('base-layout'),
	header: HashService.className('base-layout__header'),
	body: HashService.className('base-layout__body'),
	footer: HashService.className('base-layout__footer')
};

export const Root = styled('div', { label: classes.root })`
	display: flex;
	flex-direction: column;
	min-height: 100%;

	.${classes.header} {
		flex-shrink: 0;
		position: relative;
		z-index: 20;
	}

	.${classes.body} {
		flex-grow: 1;
		position: relative;
		z-index: 10;
	}

	.${classes.footer} {
		flex-shrink: 0;
	}
`;
