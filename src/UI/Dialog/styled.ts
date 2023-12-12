import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { Dialog, dialogClasses } from '@mui/material';

export const classes = {
	root: HashService.className('ui-dialog')
};

export const Root = styled(Dialog, { label: classes.root })`
	.${dialogClasses.paper} {
		background-color: ${({ theme }) => theme.palette.background.default};
		z-index: 0;
		padding: 40px;
		border-radius: 20px;
		margin: 16px;
	}

	.${dialogClasses.paperWidthSm} {
		width: 600px !important;
		max-width: 600px !important;
	}

	.${dialogClasses.paperWidthLg} {
		width: 1024px !important;
		max-width: 1024px !important;
	}
`;
