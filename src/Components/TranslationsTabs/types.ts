import { ReactNode } from 'react';

export interface TranslationsData {
	language: string;
	[p: string]: any;
}

export interface TranslationsTabsProps {
	name?: string;
	names?: string[];
	children?: (name: string, index: number, data: TranslationsData) => ReactNode;
}
