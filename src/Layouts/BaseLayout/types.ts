import { PageDataProviderProps } from 'Services/PageData';
import { ReactNode } from 'react';

export interface BaseLayoutProps extends PageDataProviderProps {
	children?: ReactNode;
}
