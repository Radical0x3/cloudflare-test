import { UiTextField } from 'UI/TextField';
import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { inputBaseClasses } from '@mui/material';

export const classes = {
	root: HashService.className('ui-text-field-password')
};

export const Root = styled(UiTextField, { label: classes.root })`
	.${inputBaseClasses.root} {
		padding-right: 6px;
	}
`;
