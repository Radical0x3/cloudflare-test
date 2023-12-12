import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { Hidden } from '@mui/material';

export const classes = {
	root: HashService.className('ui-hidden')
};

export const Root = styled(Hidden, { label: classes.root })``;
