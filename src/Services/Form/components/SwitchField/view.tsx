import { FC } from 'react';
import { FormControlLabel } from '@mui/material';
import { useController } from 'react-hook-form';
import { UiSwitch } from 'UI/Switch';
import { UiTypography } from 'UI/Typography';
import { useFormErrorMessage } from '../../index';
import { Root } from './styled';
import { FormSwitchFieldProps } from './types';

export const FormSwitchField: FC<FormSwitchFieldProps> = ({
	name,
	defaultValue = false,
	label,
	checkedLabel,
	unCheckedLabel,
	color = 'primary',
	validationRules,
	disabled,
	onChange,
	...props
}) => {
	const { field } = useController({ name, rules: validationRules });
	const errorMessage = useFormErrorMessage(name);

	return (
		<Root>
			{label ? (
				<UiTypography variant={'body2'} color={'grey.600'}>
					{`${label}${props.required ? ' *' : ''}`}
				</UiTypography>
			) : null}
			<FormControlLabel
				disabled={disabled}
				label={
					field.value ? (
						checkedLabel ? (
							<UiTypography variant={'body2'}>{checkedLabel}</UiTypography>
						) : undefined
					) : unCheckedLabel ? (
						<UiTypography variant={'body2'}>{unCheckedLabel}</UiTypography>
					) : undefined
				}
				control={
					<UiSwitch
						checked={!!field.value}
						color={errorMessage ? 'error' : color}
						{...props}
						onChange={(event, checked) => {
							field.onChange(event);
							if (onChange) {
								onChange(checked);
							}
						}}
					/>
				}
			/>
			{errorMessage ? (
				<UiTypography variant={'body2'} color={'error.main'} marginLeft={3} marginTop={1}>
					{errorMessage}
				</UiTypography>
			) : null}
		</Root>
	);
};
