import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { UiTextField, UiTextFieldProps } from 'UI/TextField';
import { inputAdornmentClasses, inputBaseClasses } from '@mui/material';

export const classes = {
	root: HashService.className('ui-text-field-search')
};

export const Root = styled(UiTextField, { label: classes.root })<UiTextFieldProps>`
	.${inputBaseClasses.root} {
		padding-right: 6px;
	}

	.${inputAdornmentClasses.root} {
		color: ${({ theme }) => theme.palette.secondary.main};

		svg {
			font-size: 24px;
		}
	}

	input[type='search']::-webkit-search-decoration {
		-webkit-appearance: none;
	}
	input[type='search']::-webkit-search-cancel-button {
		-webkit-appearance: none;
	}
	input[type='search']::-webkit-search-results-button {
		-webkit-appearance: none;
	}
	input[type='search']::-webkit-search-results-decoration {
		-webkit-appearance: none;
	}
`;
