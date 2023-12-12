import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('menu-item-counter')
};

export const Root = styled('div', { label: classes.root })`
	position: absolute;
	top: 0;
	right: -3px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.palette.primary.main};
	min-width: 20px;
	padding: 0 2px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 9px;
`;
