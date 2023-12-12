import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { TablePagination, tablePaginationClasses } from '@mui/material';

export const classes = {
	root: HashService.className('ui-table-pagination')
};

export const Root = styled(TablePagination, { label: classes.root })`
	.${tablePaginationClasses.selectLabel} {
		@media (max-width: ${({ theme }) => theme.breakpoints.values.sm - 1}px) {
			display: none;
		}
	}
`;
