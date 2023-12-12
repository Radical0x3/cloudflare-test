import { HashService } from 'Services/Hash';
import { styled } from '@mui/material/styles';
import { Menu } from '@mui/material';

export const classes = {
	root: HashService.className('ui-menu')
};

export const Root = styled(Menu, { label: classes.root })``;
