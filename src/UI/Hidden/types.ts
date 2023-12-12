import { ThemeDataBreakpoints } from 'Services/Theme';
import { ReactNode } from 'react';

export interface UiHiddenProps {
	minWidth?: keyof ThemeDataBreakpoints;
	maxWidth?: keyof ThemeDataBreakpoints;
	minHeight?: keyof ThemeDataBreakpoints;
	maxHeight?: keyof ThemeDataBreakpoints;
	children?: ReactNode;
}
