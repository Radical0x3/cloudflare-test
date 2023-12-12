import { HashService } from 'Services/Hash';
import { styled } from '@mui/material/styles';

export const classes = {
	root: HashService.className('form-select-field')
};

export const Root = styled('div', { label: classes.root })``;
