import { LinkProps as NextLinkProps } from 'next/dist/client/link';
import { AnchorHTMLAttributes } from 'react';
import { PlainObject } from 'Interfaces/PlainObject';

export interface UiLinkProps
	extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
		Omit<NextLinkProps, 'to' | 'linkAs' | 'href' | 'color' | 'as' | 'onClick' | 'onMouseEnter' | 'onTouchStart'> {
	activeClassName?: string;
	asPath?: NextLinkProps['as'] | null;
	href?: NextLinkProps['href'] | null;
	classes?: PlainObject;
	withLink?: boolean;
}

export interface UiLinkComponentProps extends UiLinkProps {
	styled?: boolean;
}
