import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('section'),
	border: HashService.className('section__border'),
	borderTop: HashService.className('section__border-top'),
	borderBottom: HashService.className('section__border-bottom'),
	padding: HashService.className('section__padding'),
	margin: HashService.className('section__margin'),
	background: HashService.className('section__background'),
	paper: HashService.className('section__paper')
};

export const Root = styled('section', { label: classes.root })`
	position: relative;

	&.${classes.padding} {
		padding-top: 24px;
		padding-bottom: 24px;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
			padding-top: 40px;
			padding-bottom: 40px;
		}
	}

	&.${classes.border} {
		border-radius: 24px;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
			border-radius: 40px;
		}
	}

	&.${classes.borderTop} {
		border-top-left-radius: 24px;
		border-top-right-radius: 24px;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
			border-top-left-radius: 40px;
			border-top-right-radius: 40px;
		}
	}

	&.${classes.borderBottom} {
		border-bottom-left-radius: 24px;
		border-bottom-right-radius: 24px;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
			border-bottom-left-radius: 40px;
			border-bottom-right-radius: 40px;
		}
	}

	&.${classes.margin} {
		margin-top: -24px;
		margin-bottom: -24px;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
			margin-top: -40px;
			margin-bottom: -40px;
		}
	}

	&.${classes.background} {
		background-color: ${({ theme }) => theme.palette.background.default};
	}

	&.${classes.paper} {
		background-color: ${({ theme }) => theme.palette.background.paper};
	}
`;
