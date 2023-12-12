import { FC } from 'react';
import { useController, ValidateResult } from 'react-hook-form';
import { UiDatePicker } from 'UI/DatePicker';
import { UiTypography } from 'UI/Typography';
import { useFormErrorMessage } from '../../provider';
import { Root } from './styled';
import { FormDatePickerFieldProps } from './types';
import { UtilService } from 'Services/Util';
import { useI18n } from 'Services/I18n';
import { PlainObject } from 'Interfaces/PlainObject';

export const FormDatePickerField: FC<FormDatePickerFieldProps> = ({
	name,
	validationRules: { validate = {}, ...validationRules } = {},
	onChange,
	className,
	minDate,
	maxDate,
	required,
	label,
	...props
}) => {
	const i18n = useI18n();

	const validateRule: PlainObject = {
		invalidDate: (value: any): ValidateResult => {
			if (isNaN(value.getTime())) {
				return i18n('validation__invalid-date');
			}
		}
	};
	if (minDate) {
		validateRule.minDate = (value: any): ValidateResult => {
			if (!isNaN(value.getTime())) {
				if (UtilService.methods.isBeforeDate(value, minDate)) {
					return i18n('validation__min-date', {
						date: UtilService.methods.formatDateToClient(minDate)
					});
				}
			}
		};
	}
	if (maxDate) {
		validateRule.maxDate = (value: any): ValidateResult => {
			if (!isNaN(value.getTime())) {
				if (UtilService.methods.isAfterDate(value, maxDate)) {
					return i18n('validation__max-date', {
						date: UtilService.methods.formatDateToClient(maxDate)
					});
				}
			}
		};
	}

	const { field } = useController({
		name,
		rules: {
			...validationRules,
			validate: {
				...validateRule,
				...validate
			}
		}
	});
	const errorMessage = useFormErrorMessage(name);

	return (
		<Root className={className}>
			<UiDatePicker
				{...props}
				label={label ? `${label}${required ? ' *' : ''}` : undefined}
				minDate={minDate}
				maxDate={maxDate}
				value={field.value}
				onChange={(event: any, value: any) => {
					field.onChange(event, value);
					if (onChange) {
						onChange(value);
					}
				}}
			/>
			{errorMessage ? (
				<UiTypography variant={'body2'} color={'error.dark'} m={'4px 14px'}>
					{errorMessage}
				</UiTypography>
			) : null}
		</Root>
	);
};
