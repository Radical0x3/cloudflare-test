import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { UiPaper } from 'UI/Paper';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { iconButtonClasses, inputAdornmentClasses, outlinedInputClasses, inputLabelClasses } from '@mui/material';
import { alpha } from '@mui/system';
import { MUI_FOCUSED_CLASS_NAME, MUI_DISABLED_CLASS_NAME } from 'Services/Theme/constants';
import { UiDatePickerProps } from './types';

export const rootClasses = {
	root: HashService.className('ui-date-picker')
};

export const Root = styled(DesktopDatePicker, { label: rootClasses.root })<UiDatePickerProps>`
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
		min-height: 56px;

		.${outlinedInputClasses.notchedOutline} {
			border-color: ${({ theme }) => theme.palette.grey[500]};
		}

		.${inputAdornmentClasses.root} {
			.${iconButtonClasses.root} {
				margin: 0 !important;
				color: ${({ theme }) => theme.palette.text.primary};
				background-color: transparent;

				@media (hover: hover) {
					&:hover {
						color: ${({ theme }) => theme.palette.secondary.dark};
						background-color: ${({ theme }) => alpha(theme.palette.secondary.main, 0.05)};
					}
				}
			}
		}

		&.${MUI_DISABLED_CLASS_NAME} {
			opacity: 0.5;

			.${inputAdornmentClasses.root} {
				.${iconButtonClasses.root} {
					color: ${({ theme }) => theme.palette.text.disabled};
				}
			}
		}

		@media (hover: hover) {
			&:not(.${MUI_DISABLED_CLASS_NAME}):hover {
				.${outlinedInputClasses.notchedOutline} {
					border-color: ${({ theme }) => theme.palette.primary.main};
				}
			}
		}
	}
`;

export const paperClasses = {
	root: HashService.className('ui-date-picker-paper')
};

export const Paper = styled(UiPaper, { label: paperClasses.root })``;
