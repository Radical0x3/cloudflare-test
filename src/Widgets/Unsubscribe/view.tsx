import { FC, useState } from 'react';
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

export const Unsubscribe: FC<UnsubscribeProps> = ({ token }) => {
	const i18n = useI18n();
	const apolloClient = useApolloClient();
	const [showResult, setShowResult] = useState(false);

	const handleClick = async (): Promise<void> => {
		const { data, errors = [] } = await apolloClient.mutate<
			UserUnsubscribeMutation,
			UserUnsubscribeMutationVariables
		>({
			mutation: USER_UNSUBSCRIBE,
			variables: {
				token: token
			},
			errorPolicy: 'all'
		});
		if (data?.userNotificationsUnsubscribe) {
			setShowResult(true);
		} else {
			notify(errors[0].message, 'error');
		}
	};

	return (
		<Root>
			<UiContainer>
				<div className={classes.container}>
					<UiGrid spacing={3} justifyContent={'center'} textAlign={'center'}>
						<UiGridItem xs={12} lg={8}>
							<UiTypography component={'h2'} variant={'h2'} color={'primary.contrastText'}>
								{i18n('unsubscribe__page-title')}
							</UiTypography>
						</UiGridItem>
						{showResult ? (
							<UiGridItem xs={12} lg={6}>
								<UiTypography color={'text.secondary'}>{i18n('unsubscribe__success')}</UiTypography>
							</UiGridItem>
						) : (
							<>
								<UiGridItem xs={12} lg={6}>
									<UiTypography color={'text.secondary'}>{i18n('unsubscribe__text')}</UiTypography>
								</UiGridItem>
								<UiGridItem xs={12}>
									<UiButton onClick={handleClick}>{i18n('unsubscribe__button')}</UiButton>
								</UiGridItem>
							</>
						)}
					</UiGrid>
				</div>
			</UiContainer>
			<UiImg src={'/images/title-block/stars.svg'} width={1440} height={342} className={classes.stars} />
		</Root>
	);
};
