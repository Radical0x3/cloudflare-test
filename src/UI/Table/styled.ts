import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { Table } from '@mui/material';

export const classes = {
	root: HashService.className('ui-table')
};

export const Root = styled(Table, { label: classes.root })``;
