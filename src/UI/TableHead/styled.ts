import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { TableHead } from '@mui/material';

export const classes = {
	root: HashService.className('ui-table-head')
};

export const Root = styled(TableHead, { label: classes.root })``;
