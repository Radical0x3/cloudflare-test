import { PlainObject } from 'Interfaces/PlainObject';
import { ReactNode } from 'react';

export interface UiContainerProps extends PlainObject {
	disableGutters?: boolean;
	size?: 'medium' | 'small';
	children?: ReactNode;
}
