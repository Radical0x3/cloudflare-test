import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { Switch } from '@mui/material';

export const classes = {
	root: HashService.className('ui-switch')
};

export const Root = styled(Switch, { label: classes.root })``;
