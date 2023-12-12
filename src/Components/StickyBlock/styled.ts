import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('sticky-block')
};

export const Root = styled('div', { label: classes.root })`
	position: sticky;
	top: 0;
	overflow: hidden;
`;
