import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { TableContainer } from '@mui/material';

export const classes = {
	root: HashService.className('ui-table-container')
};

export const Root = styled(TableContainer, { label: classes.root })``;
