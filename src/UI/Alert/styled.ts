import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { Alert } from '@mui/material';

export const classes = {
	root: HashService.className('ui-alert')
};

export const Root = styled(Alert, { label: classes.root })``;
