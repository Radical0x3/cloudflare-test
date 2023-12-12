import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { Collapse } from '@mui/material';

export const classes = {
	root: HashService.className('ui-collapse')
};

export const Root = styled(Collapse, { label: classes.root })``;
