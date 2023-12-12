import { FC, ReactElement } from 'react';
import { useController } from 'react-hook-form';
import { UiTextField } from 'UI/TextField';
import { UiTypography } from 'UI/Typography';
import { useFormErrorMessage } from '../../provider';
import { FormTextFieldProps } from './types';
import { Root } from './styled';

export const FormTextField: FC<FormTextFieldProps> = ({
	name,
	validationRules,
	onChange,
	className,
	hidden,
	...props
}): ReactElement => {
	const { field } = useController({ name, rules: validationRules });
	const errorMessage = useFormErrorMessage(name);

	return (
		<Root className={className}>
			{!hidden ? (
				<UiTextField
					error={!!errorMessage}
					variant={'outlined'}
					{...props}
					onChange={(event) => {
						field.onChange(event);
						if (onChange) {
							onChange(event.target.value);
						}
					}}
					value={field.value || ''}
				/>
			) : null}
			{errorMessage ? (
				<UiTypography variant={'body2'} color={'error.dark'} m={'4px 14px'}>
					{errorMessage}
				</UiTypography>
			) : null}
		</Root>
	);
};
