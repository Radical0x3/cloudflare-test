import { FC, useMemo, useState } from 'react';
import { Root, Picker } from './styled';
import { FormDateRangePickerFieldProps } from './types';
import { useController } from 'react-hook-form';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useFormErrorMessage } from '../../provider';
import { format } from 'date-fns';
import { DateRangePickerProps, DateRange } from 'react-date-range';
import { UiTextField } from 'UI/TextField';
import { UiTypography } from 'UI/Typography';
import { UiPopover } from 'UI/Popover';
import { CLIENT_DATE } from 'Services/Util/constants';
import { lightColorTheme } from 'Services/Theme/themes';
import { enUS } from 'date-fns/locale';

export const FormDateRangePickerField: FC<FormDateRangePickerFieldProps> = ({
	name,
	label,
	validationRules: { validate = {}, ...validationRules } = {},
	required,
	datePickerProps = {},
	dateFormat = CLIENT_DATE,
	onChange,
	...props
}) => {
	const { onChange: onChangeDatePicker = () => undefined } = datePickerProps;
	const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
	const [openDatePicker, setOpenDatePicker] = useState(false);
	const { field } = useController({
		name,
		rules: {
			...validationRules,
			validate
		}
	});
	const errorMessage = useFormErrorMessage(name);
	const value = useMemo(() => {
		if (field.value) {
			const { startDate, endDate } = field.value;
			return startDate && endDate ? `${format(startDate, dateFormat)} - ${format(endDate, dateFormat)}` : '';
		} else {
			return '';
		}
	}, [dateFormat, field.value]);

	const _onChangeDatePicker: DateRangePickerProps['onChange'] = (value) => {
		field.onChange({ startDate: value.selection.startDate, endDate: value.selection.endDate });
		onChangeDatePicker(value);
		if (onChange) {
			onChange(value);
		}
	};

	return (
		<Root>
			<UiTextField
				error={!!errorMessage}
				{...props}
				label={label ? `${label}${required ? ' *' : ''}` : undefined}
				value={value}
				onClick={(event) => {
					setAnchorEl(event.currentTarget);
					setOpenDatePicker(true);
				}}
			/>
			{errorMessage ? (
				<UiTypography variant={'body2'} color={'error.dark'} m={'4px 14px'}>
					{errorMessage}
				</UiTypography>
			) : null}
			<UiPopover
				open={openDatePicker}
				anchorEl={anchorEl}
				onClose={() => setOpenDatePicker(false)}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right'
				}}
				transformOrigin={{
					horizontal: 'right',
					vertical: 'top'
				}}
			>
				<Picker>
					<DateRange
						{...datePickerProps}
						locale={enUS}
						ranges={[
							{
								startDate: field.value.startDate,
								endDate: field.value.endDate,
								key: 'selection',
								color: lightColorTheme.palette.primary.main
							}
						]}
						onChange={_onChangeDatePicker}
					/>
				</Picker>
			</UiPopover>
		</Root>
	);
};
