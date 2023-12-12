import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { Radio } from '@mui/material';

export const classes = {
	root: HashService.className('ui-radio')
};

export const Root = styled(Radio, { label: classes.root })``;
