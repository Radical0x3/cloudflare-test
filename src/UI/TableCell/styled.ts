import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { TableCell } from '@mui/material';

export const classes = {
	root: HashService.className('ui-table-cell')
};

export const Root = styled(TableCell, { label: classes.root })`
	border-bottom-color: ${({ theme }) => theme.palette.grey[200]};
`;
