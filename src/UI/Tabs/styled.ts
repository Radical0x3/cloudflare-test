import { Tabs, tabsClasses, tabScrollButtonClasses } from '@mui/material';
import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('ui-tabs')
};

export const Root = styled(Tabs, { label: classes.root })`
	overflow: initial;
	position: relative;
	border-bottom: 1px solid ${({ theme }) => theme.palette.grey['500']};

	.${tabScrollButtonClasses.root} {
		padding: 0;
		width: 20px;
		position: absolute;
		top: 0;
		bottom: 0;

		&:first-of-type {
			right: 100%;
		}

		&:last-of-type {
			left: 100%;
		}
	}

	.${tabsClasses.indicator} {
		height: 3px;
	}
`;
