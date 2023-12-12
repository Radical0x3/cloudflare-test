import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('header')
};

export const Root = styled('div', { label: classes.root })`
	height: 100px;
	display: flex;
	align-items: center;
`;
