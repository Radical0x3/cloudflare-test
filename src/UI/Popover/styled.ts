import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { Popover, popoverClasses } from '@mui/material';

export const classes = {
	root: HashService.className('ui-popover'),
	sizeXs: HashService.className('ui-popover--size-xs')
};

export const Root = styled(Popover, { label: classes.root })`
	.${popoverClasses.paper} {
		padding: 16px;
	}

	&.${classes.sizeXs} {
		.${popoverClasses.paper} {
			width: 400px;
		}
	}
`;
