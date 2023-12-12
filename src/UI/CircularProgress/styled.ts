import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { CircularProgress } from '@mui/material';

export const classes = {
	root: HashService.className('ui-circular-progress')
};

export const Root = styled(CircularProgress, { label: classes.root })``;
