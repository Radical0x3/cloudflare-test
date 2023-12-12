import { FC } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { useI18n } from 'Services/I18n';
import { UiTypography } from 'UI/Typography';
import { UiButton } from 'UI/Button';
import { useFormErrorMessage } from '../../provider';
import { Root } from './styled';
import { FormUploadFileFieldProps } from './types';

export const FormUploadFileField: FC<FormUploadFileFieldProps> = ({
	name,
	label,
	className,
	accept,
	maxSize, // in MB
	multiple,
	validationRules,
	children,
	onChange,
	buttonIcon,
	showLabel = true,
	disabled,
	...props
}) => {
	const i18n = useI18n();
	const { setValue, setError, clearErrors, getValues, watch } = useFormContext();
	watch([name], {
		[name]: []
	});
	const files = getValues(name) || [];
	const fileNames = files.map((file: File) => file.name);
	const fileName = fileNames.length ? fileNames.join(', ') : label || i18n('form-upload-file__button');
	const errorMessage = useFormErrorMessage(name);

	const { getRootProps, getInputProps } = useDropzone({
		accept,
		maxSize: maxSize ? maxSize * 1024 * 1024 : undefined,
		multiple,
		disabled: disabled,
		onDrop: (acceptedFiles, fileRejections): void => {
			clearErrors(name);

			let error;
			for (const item of fileRejections) {
				if (item.errors) {
					let hasError = false;
					for (const error of item.errors) {
						if (validationRules && validationRules.accept && error.code === 'file-invalid-type') {
							setError(name, {
								message: validationRules.accept
							});
							hasError = true;
							break;
						}
						if (validationRules && validationRules.maxSize && error.code === 'file-too-large') {
							setError(name, {
								message: validationRules.maxSize
							});
							hasError = true;
							break;
						}
					}
					if (hasError) {
						break;
					}
				}
			}
			if (validationRules && validationRules.required && !acceptedFiles.length) {
				setError(name, {
					message: validationRules.required
				});
			}

			if (!error) {
				if (onChange) {
					onChange(acceptedFiles);
				}
				setValue(name, acceptedFiles);
			} else {
				if (onChange) {
					onChange([]);
				}
			}
		},
		...props
	});

	const rootProps = getRootProps();

	const inputProps = getInputProps({
		accept: accept,
		multiple: multiple,
		disabled: disabled
	});

	return (
		<Root className={className}>
			<div {...rootProps}>
				<input {...inputProps} />
				{children || (
					<UiButton
						component={'div'}
						variant={'outlined'}
						size={'small'}
						startIcon={buttonIcon || <AttachFileIcon />}
						disabled={disabled}
					>
						{showLabel ? fileName : null}
					</UiButton>
				)}
			</div>
			{errorMessage ? (
				<UiTypography variant={'body2'} color={'error.dark'} m={'4px 14px'}>
					{errorMessage}
				</UiTypography>
			) : null}
		</Root>
	);
};
