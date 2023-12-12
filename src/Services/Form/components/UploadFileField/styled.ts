import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('form-upload-file-field')
};

export const Root = styled('div', { label: classes.root })``;
