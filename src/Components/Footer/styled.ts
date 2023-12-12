import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { MUI_ACTIVE_CLASS_NAME } from 'Services/Theme/constants';

export const classes = {
	root: HashService.className('footer'),
	link: HashService.className('footer__Link')
};

export const Root = styled('div', { label: classes.root })`
	min-height: 100px;
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.palette.primary.main};
	padding-bottom: 24px;

	@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
		padding-bottom: 0;
	}

	.${classes.link} {
		transition: 0.3s;

		@media (hover: hover) {
			&:not(.${MUI_ACTIVE_CLASS_NAME}):hover {
				color: ${({ theme }) => theme.palette.warning.main};
			}
		}

		&.${MUI_ACTIVE_CLASS_NAME} {
			color: ${({ theme }) => theme.palette.warning.main};
		}
	}
`;
