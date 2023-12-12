import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { InputAdornment } from '@mui/material';

export const classes = {
	root: HashService.className('ui-input-adornment')
};

export const Root = styled(InputAdornment, { label: classes.root })``;
