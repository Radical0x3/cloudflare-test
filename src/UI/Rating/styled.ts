import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { Rating } from '@mui/material';

export const classes = {
	root: HashService.className('ui-rating')
};

export const Root = styled(Rating, { label: classes.root })``;
