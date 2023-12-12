import { outlinedInputClasses, inputLabelClasses, TextField } from '@mui/material';
import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { MUI_DISABLED_CLASS_NAME, MUI_FOCUSED_CLASS_NAME } from 'Services/Theme/constants';

export const classes = {
	root: HashService.className('ui-text-field')
};

export const Root = styled(TextField, { label: classes.root })`
	width: 100%;

	.${inputLabelClasses.root} {
		color: ${({ theme }) => theme.palette.grey[600]};

		&.${MUI_FOCUSED_CLASS_NAME} {
			color: ${({ theme }) => theme.palette.primary.main};
		}

		&.${MUI_DISABLED_CLASS_NAME} {
			opacity: 0.5;
		}
	}

	.${outlinedInputClasses.root} {
		border-radius: 20px;

		.${outlinedInputClasses.input} {
			padding-top: 0;
			padding-bottom: 0;
			min-height: 56px;
			text-transform: initial;
			font-size: 16px;
			color: ${({ theme }) => theme.palette.text.primary};
			caret-color: ${({ theme }) => theme.palette.primary.main};
		}

		.${outlinedInputClasses.notchedOutline} {
			border-color: ${({ theme }) => theme.palette.grey[500]};
		}

		&.${outlinedInputClasses.sizeSmall} {
			border-radius: 14px;

			.${outlinedInputClasses.input} {
				min-height: 40px;
			}
		}

		&.${outlinedInputClasses.multiline} {
			min-height: 56px;

			.${outlinedInputClasses.input} {
				padding-top: 0;
				padding-bottom: 0;
				min-height: 0;
				text-transform: initial;
				font-size: 16px;
			}

			&.${outlinedInputClasses.sizeSmall} {
				min-height: 40px;
			}
		}

		&.${MUI_FOCUSED_CLASS_NAME} {
			.${outlinedInputClasses.notchedOutline} {
				border-color: ${({ theme }) => theme.palette.primary.main};
			}
		}

		&.${MUI_DISABLED_CLASS_NAME} {
			opacity: 0.5;
		}

		@media (hover: hover) {
			&:not(.${MUI_DISABLED_CLASS_NAME}):hover {
				.${outlinedInputClasses.notchedOutline} {
					border-color: ${({ theme }) => theme.palette.primary.main};
				}
			}
		}
	}

	input:-webkit-autofill,
	textarea:-webkit-autofill {
		-webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.palette.background.default} inset !important;
		-webkit-text-fill-color: ${({ theme }) => theme.palette.text.primary} !important;
	}
`;
