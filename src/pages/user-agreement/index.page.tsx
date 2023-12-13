import { AppPage } from 'Interfaces/AppPage';
import { PropsResult, SSRPublicPageProps } from 'Services/ServerSide';
import { BaseLayout } from 'Layouts/BaseLayout';
import { GetUserAgreementPageQuery, GetUserAgreementPageQueryVariables } from 'Services/GQL';
import { GET_USER_AGREEMENT_PAGE } from './gql';
import { I18nService, useI18n } from 'Services/I18n';
import { Section } from 'Components/Section';
import { TitleBlock } from 'Widgets/TitleBlock';
import { DownloadApp } from 'Widgets/DownloadApp';
import { WysiwygBlock } from 'Widgets/WysiwygBlock';
import { ApolloService } from 'Services/Apollo';
import { GetStaticPropsContext } from 'next';

type QueriedData = GetUserAgreementPageQuery;
type QueryVariables = null;
type NormalizedData = {
	userAgreement: string;
};

export const getStaticProps = async (
	context: GetStaticPropsContext
): Promise<
	PropsResult<{
		normalizedData: NormalizedData;
	}>
> => {
	const language = context.locale || I18nService.DEFAULT_LOCALE;
	const client = ApolloService.getClient({
		language,
		uri: process.env.GRAPHQL_API
	});
	const { data } = await client.query<GetUserAgreementPageQuery, GetUserAgreementPageQueryVariables>({
		query: GET_USER_AGREEMENT_PAGE
	});

	return {
		props: {
			normalizedData: {
				userAgreement: data.globalSettings.user_agreement || ''
			}
		}
	};
};

const Page: AppPage<SSRPublicPageProps<QueriedData, QueryVariables, NormalizedData>> = ({ normalizedData }) => {
	const i18n = useI18n();

	return (
		<BaseLayout htmlTitle={i18n('user-agreement__page-title')}>
			<Section>
				<TitleBlock title={i18n('user-agreement__title')} subtitle={i18n('user-agreement__subtitle')} />
			</Section>
			<Section>
				<WysiwygBlock data={normalizedData.userAgreement} />
			</Section>
			<Section>
				<DownloadApp />
			</Section>
		</BaseLayout>
	);
};

export { Page as default };
