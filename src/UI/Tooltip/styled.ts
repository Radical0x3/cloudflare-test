import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { Tooltip } from '@mui/material';

export const classes = {
	root: HashService.className('ui-tooltip')
};

export const Root = styled(Tooltip, { label: classes.root })``;
