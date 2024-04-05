import { AppPage } from 'Interfaces/AppPage';
import { PropsResult, SSRPublicPageProps } from 'Services/ServerSide';
import { BaseLayout } from 'Layouts/BaseLayout';
import { DownloadApp } from 'Widgets/DownloadApp';
import { Section } from 'Components/Section';
import { I18nService, useI18n } from 'Services/I18n';
import { TitleBlock } from 'Widgets/TitleBlock';
import {
	GetPrivacyPolicyPageQuery,
	GetPrivacyPolicyPageQueryVariables,
	GlobalSettingsAliasEnumType
} from 'Services/GQL';
import { GET_PRIVACY_POLICY_PAGE } from './gql';
import { WysiwygBlock } from 'Widgets/WysiwygBlock';
import { GetStaticPropsContext } from 'next';
import { ApolloService } from 'Services/Apollo';

type QueriedData = GetPrivacyPolicyPageQuery;
type QueryVariables = null;
type NormalizedData = {
	privacyPolicy: string;
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
	const { data } = await client.query<GetPrivacyPolicyPageQuery, GetPrivacyPolicyPageQueryVariables>({
		query: GET_PRIVACY_POLICY_PAGE
	});
	const privacyPolicy = data.globalSettings.find(({ alias }) => alias === GlobalSettingsAliasEnumType.PrivacyPolicy);

	return {
		props: {
			normalizedData: {
				privacyPolicy: privacyPolicy?.value || ''
			}
		}
	};
};

const Page: AppPage<SSRPublicPageProps<QueriedData, QueryVariables, NormalizedData>> = ({ normalizedData }) => {
	const i18n = useI18n();

	return (
		<BaseLayout htmlTitle={i18n('privacy-policy__page-title')}>
			<Section>
				<TitleBlock title={i18n('privacy-policy__title')} subtitle={i18n('privacy-policy__subtitle')} />
			</Section>
			<Section>
				<WysiwygBlock data={normalizedData.privacyPolicy} />
			</Section>
			<Section>
				<DownloadApp />
			</Section>
		</BaseLayout>
	);
};

export { Page as default };
