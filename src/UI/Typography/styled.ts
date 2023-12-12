import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { Typography } from '@mui/material';
import { UiTypographyProps } from './types';

export const classes = {
	root: HashService.className('ui-typography')
};

export const Root = styled(Typography, { label: classes.root })<UiTypographyProps>``;
