import { InputAdornmentProps } from '@mui/material';
import { ReactElement } from 'react';

export interface UiInputAdornmentProps extends InputAdornmentProps {
	children?: ReactElement;
}
