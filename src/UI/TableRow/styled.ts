import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { TableRow } from '@mui/material';

export const classes = {
	root: HashService.className('ui-table-row')
};

export const Root = styled(TableRow, { label: classes.root })``;
