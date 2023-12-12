import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { DialogTitle } from '@mui/material';

export const classes = {
	root: HashService.className('ui-dialog-title')
};

export const Root = styled(DialogTitle, { label: classes.root })``;
