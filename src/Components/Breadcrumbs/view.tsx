import { FC } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { usePageDataContext } from 'Services/PageData';
import { RenderService } from 'Services/Render';
import { TypeService } from 'Services/Type';
import { useI18n } from 'Services/I18n';
import { RoutesService } from 'Services/Routes';
import { UiBreadcrumbs } from 'UI/Breadcrumbs';
import { UiTypography } from 'UI/Typography';
import { Props } from './types';
import { classes, Root } from './styled';

export const Breadcrumbs: FC<Props> = () => {
	const i18n = useI18n();
	const { breadcrumbs } = usePageDataContext();

	return !!breadcrumbs?.length ? (
		<Root>
			<UiBreadcrumbs aria-label={'breadcrumb'}>
				<UiTypography
					variant={'body2'}
					color={'primary.main'}
					className={classes.link}
					href={RoutesService._homepage.pathname}
					asPath={RoutesService._homepage.asPath()}
				>
					<HomeOutlinedIcon />
					{i18n('home__title')}
				</UiTypography>
				{breadcrumbs.map(({ label, pathname, asPath }, i) => {
					const lastIndex = breadcrumbs.length - 1;
					const key = RenderService.key(label, i);
					if (i !== lastIndex && TypeService.guards.isNotEmptyString(pathname)) {
						return (
							<UiTypography
								variant={'body2'}
								color={'primary.main'}
								className={classes.link}
								key={key}
								href={pathname}
								asPath={asPath}
							>
								{label}
							</UiTypography>
						);
					} else {
						return (
							<UiTypography variant={'body2'} color={'text.primary'} className={classes.link} key={key}>
								{label}
							</UiTypography>
						);
					}
				})}
			</UiBreadcrumbs>
		</Root>
	) : null;
};
