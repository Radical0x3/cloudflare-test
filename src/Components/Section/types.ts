import { ReactNode } from 'react';

export interface SectionProps {
	className?: string;
	zIndex?: number;
	border?: boolean;
	borderTop?: boolean;
	borderBottom?: boolean;
	padding?: boolean;
	margin?: boolean;
	background?: boolean;
	paper?: boolean;
	children?: ReactNode;
}
