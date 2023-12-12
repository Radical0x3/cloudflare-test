import { styled } from '@mui/material/styles';
import { MenuList } from '@mui/material';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('ui-menu')
};

export const Root = styled(MenuList, { label: classes.root })``;
