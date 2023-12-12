import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { UiBox } from 'UI/Box';
import { CardProps } from './types';

export const classes = {
	root: HashService.className('card'),
	noPadding: HashService.className('card--no-padding'),
	overflowVisible: HashService.className('card--overflow-visible')
};

export const Root = styled(UiBox, { label: classes.root })<CardProps>`
	padding: 24px;
	border-radius: 16px;
	background-color: ${({ theme }) => theme.palette.background.default};
	overflow: hidden;

	&.${classes.noPadding} {
		padding: 0;
	}

	&.${classes.overflowVisible} {
		overflow: visible;
	}
`;
