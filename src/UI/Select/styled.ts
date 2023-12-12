import { HashService } from 'Services/Hash';
import { styled } from 'Services/Theme';
import { FormControl, outlinedInputClasses, selectClasses, inputLabelClasses } from '@mui/material';
import { MUI_FOCUSED_CLASS_NAME, MUI_DISABLED_CLASS_NAME } from 'Services/Theme/constants';

export const classes = {
	root: HashService.className('ui-select')
};

export const Root = styled(FormControl, { label: classes.root })`
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

		.${selectClasses.select} {
			padding-top: 16px;
			padding-bottom: 16px;
			padding-right: 46px;
			min-height: 56px !important;
			box-sizing: border-box;
		}

		.${selectClasses.icon} {
			color: ${({ theme }) => theme.palette.text.primary};
			font-size: 24px;
			right: 14px;
		}

		.${outlinedInputClasses.notchedOutline} {
			border-color: ${({ theme }) => theme.palette.grey[500]};
		}

		&.${outlinedInputClasses.sizeSmall} {
			border-radius: 14px;

			.${selectClasses.select} {
				min-height: 40px !important;
			}
		}

		&.${MUI_DISABLED_CLASS_NAME} {
			opacity: 0.5;

			.${selectClasses.icon} {
				color: ${({ theme }) => theme.palette.text.disabled};
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
