import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('ui-linear-progress')
};

export const Root = styled('div', { label: classes.root })``;
