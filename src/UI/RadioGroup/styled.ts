import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { RadioGroup } from '@mui/material';

export const classes = {
	root: HashService.className('ui-radio-group')
};

export const Root = styled(RadioGroup, { label: classes.root })``;
