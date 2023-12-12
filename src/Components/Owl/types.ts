import type { ElementType, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<any> {
	spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
	className?: string;
	component?: ElementType;
}
