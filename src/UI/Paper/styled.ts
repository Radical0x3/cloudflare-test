import { styled } from 'Services/Theme';
import { Paper } from '@mui/material';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('ui-menu')
};

export const Root = styled(Paper, { label: classes.root })`
	background-color: ${({ theme }) => theme.palette.background.default} !important;
	box-shadow: ${({ theme }) => theme.shadows[1]} !important;
	border-radius: 16px !important;
`;
