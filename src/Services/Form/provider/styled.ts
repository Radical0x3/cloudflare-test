import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { linearProgressClasses } from '@mui/material';

export const classes = {
	root: HashService.className('form-provider')
};

export const Root = styled('div', { label: classes.root })`
	padding-top: 16px;
	position: relative;

	.${linearProgressClasses.root} {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
`;
