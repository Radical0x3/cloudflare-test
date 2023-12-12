import { FC } from 'react';
import { RoutesService } from 'Services/Routes';
import { UiButton } from 'UI/Button';
import { UiTypography } from 'UI/Typography';
import { Root, classes } from './styled';
import { ErrorBlockProps } from './types';
import { useI18n } from 'Services/I18n';
import { UiImg } from 'UI/Img';
import { UiContainer } from 'UI/Container';

export const ErrorBlock: FC<ErrorBlockProps> = ({ statusCode }) => {
	const i18n = useI18n();

	return (
		<Root>
			<UiContainer>
				<div className={classes.content}>
					<UiTypography className={classes.statusCode}>{statusCode}</UiTypography>
					<UiTypography variant={'h3'} color={'primary.contrastText'} marginBottom={4}>
						{i18n('error-block__title')}
					</UiTypography>
					<UiButton
						href={RoutesService._homepage.pathname}
						asPath={RoutesService._homepage.asPath()}
						variant={'contained'}
						size={'large'}
					>
						{i18n('error-block__button-link')}
					</UiButton>
				</div>
			</UiContainer>
			<UiImg src={'/images/error-block/stars.png'} width={1310} height={627} className={classes.stars} />
		</Root>
	);
};
