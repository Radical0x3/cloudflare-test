import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { TableBody } from '@mui/material';

export const classes = {
	root: HashService.className('ui-table-body')
};

export const Root = styled(TableBody, { label: classes.root })``;
