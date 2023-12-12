import { DropzoneOptions } from 'react-dropzone';
import { PlainObject } from 'Interfaces/PlainObject';
import { ReactNode } from 'react';

export interface FormUploadFileFieldProps extends Omit<DropzoneOptions, 'accept'> {
	name: string;
	className?: string;
	label?: string;
	accept?: string;
	validationRules?: PlainObject;
	onChange?(images: File[]): void;
	children?: ReactNode;
	buttonIcon?: ReactNode;
	showLabel?: boolean;
}
