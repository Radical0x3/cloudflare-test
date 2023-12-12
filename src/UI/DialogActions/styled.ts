import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { DialogActions } from '@mui/material';

export const classes = {
	root: HashService.className('ui-dialog-actions')
};

export const Root = styled(DialogActions, { label: classes.root })``;
