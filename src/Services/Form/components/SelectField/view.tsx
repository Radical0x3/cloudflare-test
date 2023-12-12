import { FC } from 'react';
import { useController } from 'react-hook-form';
import { UiSelect } from 'UI/Select';
import { UiTypography } from 'UI/Typography';
import { useFormErrorMessage } from '../../provider';
import { FormSelectFieldProps } from './types';
import { Root } from './styled';

export const FormSelectField: FC<FormSelectFieldProps> = ({
	name,
	validationRules,
	options,
	value,
	className,
	...props
}) => {
	const { field } = useController({ name, rules: validationRules, defaultValue: value });
	const errorMessage = useFormErrorMessage(name);

	return (
		<Root className={className}>
			<UiSelect
				{...props}
				options={options}
				value={value !== undefined ? value : field.value}
				onChange={(ev, p) => {
					field.onChange(ev);
					props.onChange && props.onChange(ev, p);
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
