import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { Divider } from '@mui/material';

export const classes = {
	root: HashService.className('ui-divider')
};

export const Root = styled(Divider, { label: classes.root })``;
