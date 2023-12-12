import { forwardRef } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { ThemeService } from 'Services/Theme';
import { TypeService } from 'Services/Type';
import { Root, RootUnstyled } from './styled';
import { UiLinkComponentProps, UiLinkProps } from './types';

const UiLinkComponent = forwardRef<HTMLAnchorElement, UiLinkComponentProps>(function (props, ref) {
	const {
		activeClassName,
		className: classNameProps,
		href,
		asPath,
		classes: _classes = {},
		styled,
		withLink,
		...other
	} = props;
	const { replace, scroll, shallow, prefetch = false, locale, ...rest } = other;

	const router = useRouter();
	const hrefValue = asPath || href;
	const pathname =
		typeof hrefValue === 'string'
			? hrefValue
			: TypeService.guards.isPlainObject(hrefValue)
			? hrefValue.pathname
			: null;

	if (typeof pathname === 'string') {
		const isActive = router.asPath === pathname;
		const className = clsx(
			classNameProps,
			_classes.root,
			isActive && clsx(ThemeService.MUI_ACTIVE_CLASS_NAME, activeClassName)
		);

		const isExternal =
			pathname.indexOf('http') === 0 || pathname.indexOf('mailto:') === 0 || /^#.*$/.test(pathname);
		if (isExternal) {
			if (styled) {
				return (
					<Root
						className={className}
						href={pathname}
						ref={ref}
						{...other}
						aria-label={
							rest['aria-label']
								? rest['aria-label']
								: typeof rest.children === 'string'
								? rest.children
								: undefined
						}
					/>
				);
			} else {
				return (
					<RootUnstyled
						className={className}
						href={pathname}
						ref={ref}
						{...other}
						aria-label={
							rest['aria-label']
								? rest['aria-label']
								: typeof rest.children === 'string'
								? rest.children
								: undefined
						}
					/>
				);
			}
		}

		if (isActive && !withLink) {
			if (styled) {
				return (
					<Root
						className={className}
						ref={ref}
						{...other}
						aria-label={
							rest['aria-label']
								? rest['aria-label']
								: typeof rest.children === 'string'
								? rest.children
								: undefined
						}
					/>
				);
			} else {
				return (
					<RootUnstyled
						className={className}
						ref={ref}
						{...other}
						aria-label={
							rest['aria-label']
								? rest['aria-label']
								: typeof rest.children === 'string'
								? rest.children
								: undefined
						}
					/>
				);
			}
		} else {
			return (
				<NextLink
					href={pathname}
					as={asPath || undefined}
					prefetch={prefetch}
					replace={replace}
					scroll={scroll}
					shallow={shallow}
					passHref
					legacyBehavior
					locale={locale}
				>
					{styled ? (
						<Root
							ref={ref}
							className={className}
							{...rest}
							aria-label={
								rest['aria-label']
									? rest['aria-label']
									: typeof rest.children === 'string'
									? rest.children
									: undefined
							}
						/>
					) : (
						<RootUnstyled
							ref={ref}
							className={className}
							{...rest}
							aria-label={
								rest['aria-label']
									? rest['aria-label']
									: typeof rest.children === 'string'
									? rest.children
									: undefined
							}
						/>
					)}
				</NextLink>
			);
		}
	} else {
		const className = clsx(classNameProps, _classes.root);

		if (styled) {
			return (
				<Root
					className={className}
					ref={ref}
					{...other}
					aria-label={
						rest['aria-label']
							? rest['aria-label']
							: typeof rest.children === 'string'
							? rest.children
							: undefined
					}
				/>
			);
		} else {
			return (
				<a
					className={className}
					ref={ref}
					{...other}
					aria-label={
						rest['aria-label']
							? rest['aria-label']
							: typeof rest.children === 'string'
							? rest.children
							: undefined
					}
				/>
			);
		}
	}
});

export const UiLink = forwardRef<HTMLAnchorElement, UiLinkProps>(function (props, ref) {
	return <UiLinkComponent {...props} ref={ref} styled={true} />;
});

export const UiLinkUnstyled = forwardRef<HTMLAnchorElement, UiLinkProps>(function (props, ref) {
	return <UiLinkComponent {...props} ref={ref} />;
});
