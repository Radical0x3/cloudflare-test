import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { TableSortLabel } from '@mui/material';

export const classes = {
	root: HashService.className('ui-table-sort-label')
};

export const Root = styled(TableSortLabel, { label: classes.root })``;
