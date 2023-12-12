import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { MUI_ACTIVE_CLASS_NAME } from 'Services/Theme/constants';

export const classes = {
	root: HashService.className('ui-link')
};

export const Root = styled('a', { label: classes.root })`
	display: inline-block;
	color: ${({ theme }) => theme.palette.primary.main};
	position: relative;
	text-decoration-color: currentColor;
	transition: text-decoration-color 0.3s;
	font-size: 16px;

	&.${MUI_ACTIVE_CLASS_NAME} {
		color: ${({ theme }) => theme.palette.primary.dark};
	}

	&[href]:hover {
		text-decoration-color: transparent;
	}
`;

export const RootUnstyled = styled('a', { label: classes.root })`
	text-decoration: none;
	color: ${({ theme }) => theme.palette.text.secondary};
`;
