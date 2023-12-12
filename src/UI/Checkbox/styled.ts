import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { Checkbox } from '@mui/material';

export const classes = {
	root: HashService.className('ui-checkbox')
};

export const Root = styled(Checkbox, { label: classes.root })``;
