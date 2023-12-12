import { ReactNode } from 'react';
import { PlainObject } from 'Interfaces/PlainObject';
import { BreadcrumbsItem } from 'Components/Breadcrumbs';

export interface PageDataContext extends PlainObject {
	htmlTitle?: string | null;
	breadcrumbs?: BreadcrumbsItem[];
}

export interface Props extends PageDataContext {
	children?: ReactNode;
	breadcrumbs?: BreadcrumbsItem[];
}
