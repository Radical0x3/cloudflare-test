import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('form-date-range-picker-field')
};

export const Root = styled('div', { label: classes.root })``;

export const pickerClasses = {
	root: HashService.className('form-date-range-picker')
};

export const Picker = styled('div', { label: pickerClasses.root })`
	.rdrDayToday .rdrDayNumber span {
		&::after {
			background: ${({ theme }) => theme.palette.primary.main};
		}
	}
`;
