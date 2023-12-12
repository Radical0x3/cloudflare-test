import { FC, ReactElement } from 'react';
import { useController } from 'react-hook-form';
import { UiTextPasswordField } from 'UI/TextFieldPassword';
import { UiTypography } from 'UI/Typography';
import { useFormErrorMessage } from '../../provider';
import { FormPasswordFieldProps } from './types';
import { Root } from './styled';

export const FormPasswordField: FC<FormPasswordFieldProps> = ({
	name,
	validationRules,
	onChange,
	className,
	...props
}): ReactElement => {
	const { field } = useController({ name, rules: validationRules });
	const errorMessage = useFormErrorMessage(name);

	return (
		<Root className={className}>
			<UiTextPasswordField
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
				autoComplete={'new-password'}
			/>
			{errorMessage ? (
				<UiTypography variant={'body2'} color={'error.dark'} m={'4px 14px'}>
					{errorMessage}
				</UiTypography>
			) : null}
		</Root>
	);
};
