import { styled } from 'Services/Theme';
import { Button, buttonClasses } from '@mui/material';
import { UiButtonProps } from './types';
import { HashService } from 'Services/Hash';
import { alpha } from '@mui/system';
import { MUI_DISABLED_CLASS_NAME } from 'Services/Theme/constants';

export const classes = {
	root: HashService.className('ui-button')
};

export const Root = styled(Button, { label: classes.root })<UiButtonProps>`
	text-transform: initial;
	font-weight: 400;
	line-height: 1.6;
	box-shadow: none;
	transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);

	&.${buttonClasses.sizeLarge} {
		min-height: 60px;
		border-radius: 10px;
		padding: 4px 32px;
		font-size: 16px;

		svg {
			font-size: 24px;
		}
	}

	&.${buttonClasses.sizeMedium} {
		min-height: 40px;
		border-radius: 10px;
		padding: 2px 32px;
		font-size: 16px;

		svg {
			font-size: 16px;
		}
	}

	&.${buttonClasses.sizeSmall} {
		min-height: 32px;
		border-radius: 10px;
		padding: 1px 24px;
		font-size: 14px;

		svg {
			font-size: 14px;
		}
	}

	&.${buttonClasses.containedPrimary} {
		color: ${({ theme }) => theme.palette.primary.contrastText};
		background: ${({ theme }) => theme.palette.gradient.button.default};
		border: 1px solid ${({ theme }) => theme.palette.primary.contrastText};

		@media (hover: hover) {
			&:not(.${MUI_DISABLED_CLASS_NAME}):hover {
				color: ${({ theme }) => theme.palette.primary.contrastText};
				background: ${({ theme }) => theme.palette.gradient.button.active};
			}
		}

		&.${MUI_DISABLED_CLASS_NAME} {
			color: ${({ theme }) => theme.palette.primary.contrastText};
			background: ${({ theme }) => theme.palette.gradient.button.disabled};
		}
	}

	&.${buttonClasses.outlinedPrimary} {
		color: ${({ theme }) => theme.palette.primary.main};
		background: transparent;
		border: 1px solid ${({ theme }) => theme.palette.primary.main};

		@media (hover: hover) {
			&:not(.${MUI_DISABLED_CLASS_NAME}):hover {
				color: ${({ theme }) => theme.palette.primary.contrastText};
				background: ${({ theme }) => theme.palette.primary.main};
				border-color: ${({ theme }) => theme.palette.primary.main};
			}
		}

		&.${MUI_DISABLED_CLASS_NAME} {
			color: ${({ theme }) => theme.palette.primary.main};
			background: transparent;
			border: 1px solid ${({ theme }) => theme.palette.primary.main};
			opacity: 0.35;
		}
	}

	&.${buttonClasses.textPrimary} {
		color: ${({ theme }) => theme.palette.primary.main};

		@media (hover: hover) {
			&:not(.${MUI_DISABLED_CLASS_NAME}):hover {
				color: ${({ theme }) => theme.palette.primary.main};
				background: ${({ theme }) => alpha(theme.palette.primary.main, 0.05)};
			}
		}

		&.${MUI_DISABLED_CLASS_NAME} {
			color: ${({ theme }) => theme.palette.primary.main};
			background: transparent;
			opacity: 0.35;
		}
	}

	&.${buttonClasses.containedSecondary} {
		color: ${({ theme }) => theme.palette.secondary.contrastText};
		background: ${({ theme }) => theme.palette.secondary.main};

		@media (hover: hover) {
			&:not(.${MUI_DISABLED_CLASS_NAME}):hover {
				color: ${({ theme }) => theme.palette.secondary.contrastText};
				background: ${({ theme }) => theme.palette.secondary.dark};
			}
		}

		&.${MUI_DISABLED_CLASS_NAME} {
			color: ${({ theme }) => theme.palette.secondary.contrastText};
			background: ${({ theme }) => theme.palette.secondary.main};
			opacity: 0.5;
		}
	}

	&.${buttonClasses.outlinedSecondary} {
		color: ${({ theme }) => theme.palette.secondary.main};
		background: transparent;
		border: 1px solid ${({ theme }) => theme.palette.secondary.main};

		@media (hover: hover) {
			&:not(.${MUI_DISABLED_CLASS_NAME}):hover {
				color: ${({ theme }) => theme.palette.secondary.main};
				background: ${({ theme }) => alpha(theme.palette.secondary.main, 0.2)};
				border-color: ${({ theme }) => theme.palette.secondary.main};
			}
		}

		&.${MUI_DISABLED_CLASS_NAME} {
			color: ${({ theme }) => theme.palette.secondary.main};
			background: transparent;
			border: 1px solid ${({ theme }) => theme.palette.secondary.main};
			opacity: 0.35;
		}
	}

	&.${buttonClasses.textSecondary} {
		color: ${({ theme }) => theme.palette.secondary.main};

		@media (hover: hover) {
			&:not(.${MUI_DISABLED_CLASS_NAME}):hover {
				color: ${({ theme }) => theme.palette.secondary.main};
				background: ${({ theme }) => alpha(theme.palette.secondary.main, 0.05)};
			}
		}

		&.${MUI_DISABLED_CLASS_NAME} {
			color: ${({ theme }) => theme.palette.secondary.main};
			background: transparent;
			opacity: 0.35;
		}
	}
`;
