import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { Breadcrumbs, breadcrumbsClasses } from '@mui/material';

export const classes = {
	root: HashService.className('ui-breadcrumbs')
};

export const Root = styled(Breadcrumbs, { label: classes.root })`
	.${breadcrumbsClasses.separator} {
		width: 12px;
		height: 12px;
		margin: 0 10px;
		color: ${({ theme }) => theme.palette.primary.main};

		svg {
			width: 100%;
			height: 100%;
		}
	}
`;
