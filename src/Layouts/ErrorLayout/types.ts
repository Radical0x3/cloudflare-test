import { PageDataProviderProps } from 'Services/PageData';
import { ReactNode } from 'react';

export interface ErrorLayoutProps extends PageDataProviderProps {
	children?: ReactNode;
}
