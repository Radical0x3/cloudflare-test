import { FC, useEffect, useState } from 'react';
import { Root, classes } from './styled';
import { UnsubscribeProps } from './types';
import { useI18n } from 'Services/I18n';
import { UiTypography } from 'UI/Typography';
import { UiContainer } from 'UI/Container';
import { UiGrid } from 'UI/Grid';
import { UiGridItem } from 'UI/GridItem';
import { UiButton } from 'UI/Button';
import { UiImg } from 'UI/Img';
import { useApolloClient } from '@apollo/client';
import { UserUnsubscribeMutation, UserUnsubscribeMutationVariables } from 'Services/GQL';
import { USER_UNSUBSCRIBE } from './gql';
import { notify } from 'Services/Util/methods';
import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import { URLSearchService } from 'Services/URLSearch';

export const Unsubscribe: FC<UnsubscribeProps> = () => {
	const i18n = useI18n();
	const router = useRouter();
	const apolloClient = useApolloClient();
	const [token, setToken] = useState<string | null>(null);
	const [showResult, setShowResult] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleClick = async (): Promise<void> => {
		setLoading(true);
		const { data, errors = [] } = await apolloClient.mutate<
			UserUnsubscribeMutation,
			UserUnsubscribeMutationVariables
		>({
			mutation: USER_UNSUBSCRIBE,
			variables: {
				token: token || ''
			},
			errorPolicy: 'all'
		});
		if (data?.userNotificationsUnsubscribe) {
			setShowResult(true);
		} else {
			notify(errors[0].message, 'error');
		}
		setLoading(false);
	};

	useEffect(() => {
		const urlParams = new URLSearchService(router.asPath.split('?')[1]);
		setToken(urlParams.getString('token') || '');
	}, [router.asPath]);

	return (
		<Root>
			<UiContainer>
				<div className={classes.container}>
					<UiGrid spacing={3} justifyContent={'center'} textAlign={'center'}>
						<UiGridItem xs={12} lg={8}>
							<UiTypography component={'h2'} variant={'h2'} color={'primary.contrastText'}>
								{showResult
									? i18n('unsubscribe__success')
									: token
									? i18n('unsubscribe__text')
									: token === ''
									? i18n('unsubscribe__invalid-link')
									: i18n('unsubscribe__page-title')}
							</UiTypography>
						</UiGridItem>
						{token && !showResult ? (
							<UiGridItem xs={12}>
								<UiButton
									startIcon={loading ? <CircularProgress size={16} color={'inherit'} /> : null}
									onClick={handleClick}
								>
									{i18n('unsubscribe__button')}
								</UiButton>
							</UiGridItem>
						) : null}
					</UiGrid>
				</div>
			</UiContainer>
			<UiImg src={'/images/title-block/stars.svg'} width={1440} height={342} className={classes.stars} />
		</Root>
	);
};
