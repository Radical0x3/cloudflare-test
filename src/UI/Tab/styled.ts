import { Tab, alpha } from '@mui/material';
import { styled } from 'Services/Theme';
import { MUI_SELECTED_CLASS_NAME } from 'Services/Theme/constants';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('ui-tab'),
	fullWidth: HashService.className('ui-tab--full-width')
};

export const Root = styled(Tab, { label: classes.root })`
	font-size: 16px;
	font-weight: 600;
	padding: 14px;
	text-transform: initial;
	color: ${({ theme }) => theme.palette.grey['600']} !important;
	border-radius: 10px 10px 0 0;

	@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
		padding: 14px 26px;
	}

	@media (hover: hover) {
		&:hover {
			background-color: ${({ theme }) => alpha(theme.palette.primary.main, 0.2)};
		}
	}

	&.${MUI_SELECTED_CLASS_NAME} {
		color: ${({ theme }) => theme.palette.grey['900']} !important;
		background-color: transparent !important;
		cursor: default;
	}

	&.${classes.fullWidth} {
		flex-grow: 1;
		min-width: fit-content;
	}
`;
