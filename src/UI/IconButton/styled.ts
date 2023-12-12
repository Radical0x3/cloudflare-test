import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { IconButton, iconButtonClasses } from '@mui/material';
import { UiIconButtonProps } from './types';
import { MUI_DISABLED_CLASS_NAME } from 'Services/Theme/constants';
import { alpha } from '@mui/system';

export const classes = {
	root: HashService.className('ui-icon-button'),
	variantOutlined: HashService.className('ui-icon-button__variant-outlined'),
	variantContained: HashService.className('ui-icon-button__variant-contained'),
	variantText: HashService.className('ui-icon-button__variant-text')
};

export const Root = styled(IconButton, { label: classes.root })<UiIconButtonProps>`
	&.${iconButtonClasses.sizeLarge} {
		min-height: 60px;
		min-width: 60px;
		border-radius: 20px;

		svg {
			font-size: 32px;
		}
	}

	&.${iconButtonClasses.sizeMedium} {
		min-height: 40px;
		min-width: 40px;
		border-radius: 20px;

		svg {
			font-size: 32px;
		}
	}

	&.${iconButtonClasses.sizeSmall} {
		min-height: 32px;
		min-width: 32px;
		border-radius: 20px;

		svg {
			font-size: 24px;
		}
	}

	&.${classes.variantContained} {
		&.${iconButtonClasses.colorPrimary} {
			color: ${({ theme }) => theme.palette.primary.contrastText};
			background-color: ${({ theme }) => theme.palette.primary.main};

			@media (hover: hover) {
				&:not(.${MUI_DISABLED_CLASS_NAME}):hover {
					color: ${({ theme }) => theme.palette.primary.contrastText};
					background-color: ${({ theme }) => theme.palette.primary.dark};
				}
			}

			&.${MUI_DISABLED_CLASS_NAME} {
				color: ${({ theme }) => theme.palette.primary.contrastText};
				background-color: ${({ theme }) => theme.palette.primary.main};
				opacity: 0.5;
			}
		}

		&.${iconButtonClasses.colorSecondary} {
			color: ${({ theme }) => theme.palette.secondary.contrastText};
			background-color: ${({ theme }) => theme.palette.secondary.main};

			@media (hover: hover) {
				&:not(.${MUI_DISABLED_CLASS_NAME}):hover {
					color: ${({ theme }) => theme.palette.secondary.contrastText};
					background-color: ${({ theme }) => theme.palette.secondary.dark};
				}
			}

			&.${MUI_DISABLED_CLASS_NAME} {
				color: ${({ theme }) => theme.palette.secondary.contrastText};
				background-color: ${({ theme }) => theme.palette.secondary.main};
				opacity: 0.5;
			}
		}

		&.${iconButtonClasses.colorError} {
			color: ${({ theme }) => theme.palette.error.contrastText};
			background-color: ${({ theme }) => theme.palette.error.main};

			@media (hover: hover) {
				&:not(.${MUI_DISABLED_CLASS_NAME}):hover {
					color: ${({ theme }) => theme.palette.error.contrastText};
					background-color: ${({ theme }) => theme.palette.error.dark};
				}
			}

			&.${MUI_DISABLED_CLASS_NAME} {
				color: ${({ theme }) => theme.palette.error.contrastText};
				background-color: ${({ theme }) => theme.palette.error.main};
				opacity: 0.5;
			}
		}
	}

	&.${classes.variantOutlined} {
		&.${iconButtonClasses.colorPrimary} {
			color: ${({ theme }) => theme.palette.secondary.main};
			background-color: transparent;
			border: 1px solid ${({ theme }) => theme.palette.primary.main};

			@media (hover: hover) {
				&:not(.${MUI_DISABLED_CLASS_NAME}):hover {
					color: ${({ theme }) => theme.palette.secondary.main};
					background-color: ${({ theme }) => alpha(theme.palette.primary.main, 0.2)};
					border-color: ${({ theme }) => theme.palette.primary.main};
				}
			}

			&.${MUI_DISABLED_CLASS_NAME} {
				color: ${({ theme }) => theme.palette.secondary.main};
				border: 1px solid ${({ theme }) => theme.palette.primary.main};
				background-color: transparent;
				opacity: 0.35;
			}
		}

		&.${iconButtonClasses.colorSecondary} {
			color: ${({ theme }) => theme.palette.secondary.main};
			background-color: transparent;
			border: 1px solid ${({ theme }) => theme.palette.secondary.main};

			@media (hover: hover) {
				&:not(.${MUI_DISABLED_CLASS_NAME}):hover {
					color: ${({ theme }) => theme.palette.secondary.main};
					background-color: ${({ theme }) => alpha(theme.palette.secondary.main, 0.2)};
					border-color: ${({ theme }) => theme.palette.secondary.main};
				}
			}

			&.${MUI_DISABLED_CLASS_NAME} {
				color: ${({ theme }) => theme.palette.secondary.main};
				border: 1px solid ${({ theme }) => theme.palette.secondary.main};
				background-color: transparent;
				opacity: 0.35;
			}
		}

		&.${iconButtonClasses.colorError} {
			color: ${({ theme }) => theme.palette.secondary.main};
			border: 1px solid ${({ theme }) => theme.palette.error.main};

			@media (hover: hover) {
				&:not(.${MUI_DISABLED_CLASS_NAME}):hover {
					color: ${({ theme }) => theme.palette.secondary.main};
					background-color: ${({ theme }) => alpha(theme.palette.error.main, 0.2)};
					border-color: ${({ theme }) => theme.palette.error.main};
				}
			}

			&.${MUI_DISABLED_CLASS_NAME} {
				color: ${({ theme }) => theme.palette.secondary.main};
				border: 1px solid ${({ theme }) => theme.palette.error.main};
				background-color: transparent;
				opacity: 0.35;
			}
		}
	}

	&.${classes.variantText} {
		&.${iconButtonClasses.colorPrimary} {
			color: ${({ theme }) => theme.palette.primary.main};

			@media (hover: hover) {
				&:not(.${MUI_DISABLED_CLASS_NAME}):hover {
					color: ${({ theme }) => theme.palette.primary.main};
					background-color: ${({ theme }) => alpha(theme.palette.primary.main, 0.05)};
				}
			}

			&.${MUI_DISABLED_CLASS_NAME} {
				color: ${({ theme }) => theme.palette.primary.main};
				background-color: transparent;
				opacity: 0.35;
			}
		}

		&.${iconButtonClasses.colorSecondary} {
			color: ${({ theme }) => theme.palette.secondary.main};

			@media (hover: hover) {
				&:not(.${MUI_DISABLED_CLASS_NAME}):hover {
					color: ${({ theme }) => theme.palette.secondary.main};
					background-color: ${({ theme }) => alpha(theme.palette.secondary.main, 0.05)};
				}
			}

			&.${MUI_DISABLED_CLASS_NAME} {
				color: ${({ theme }) => theme.palette.secondary.main};
				background-color: transparent;
				opacity: 0.35;
			}
		}

		&.${iconButtonClasses.colorError} {
			color: ${({ theme }) => theme.palette.error.main};

			@media (hover: hover) {
				&:not(.${MUI_DISABLED_CLASS_NAME}):hover {
					color: ${({ theme }) => theme.palette.error.main};
					background-color: ${({ theme }) => alpha(theme.palette.error.main, 0.05)};
				}
			}

			&.${MUI_DISABLED_CLASS_NAME} {
				color: ${({ theme }) => theme.palette.error.main};
				background-color: transparent;
				opacity: 0.35;
			}
		}
	}
`;
