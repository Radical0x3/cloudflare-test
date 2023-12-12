import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { Badge } from '@mui/material';

export const classes = {
	root: HashService.className('ui-badge')
};

export const Root = styled(Badge, { label: classes.root })``;
