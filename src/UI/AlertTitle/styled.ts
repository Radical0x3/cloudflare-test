import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { AlertTitle } from '@mui/material';

export const classes = {
	root: HashService.className('ui-alert-title')
};

export const Root = styled(AlertTitle, { label: classes.root })``;
