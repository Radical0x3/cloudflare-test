import { AppPage } from 'Interfaces/AppPage';
import { SSR, SSRPublic, SSRPublicInitProps, SSRPublicPageProps } from 'Services/ServerSide';
import { BaseLayout } from 'Layouts/BaseLayout';
import { route } from './route';
import { DownloadApp } from 'Widgets/DownloadApp';
import { Section } from 'Components/Section';
import { useI18n } from 'Services/I18n';
import { TitleBlock } from 'Widgets/TitleBlock';
import { GetPrivacyPolicyPageQuery } from 'Services/GQL';
import { GET_PRIVACY_POLICY_PAGE } from './gql';
import { WysiwygBlock } from 'Widgets/WysiwygBlock';

type QueriedData = GetPrivacyPolicyPageQuery;
type QueryVariables = null;
type NormalizedData = {
	privacyPolicy: string;
};

export const getServerSideProps = new SSRPublic<SSRPublicInitProps<QueriedData, QueryVariables, NormalizedData>>({
	route,
	queryOptions: () => ({
		query: GET_PRIVACY_POLICY_PAGE
	}),
	normalizeData: ({ globalSettings, ...data }) => {
		if (globalSettings.privacy_policy) {
			return {
				...data,
				privacyPolicy: globalSettings.privacy_policy
			};
		} else {
			return SSR.NOT_FOUND_RESULT;
		}
	}
}).getServerSideProps;

const Page: AppPage<SSRPublicPageProps<QueriedData, QueryVariables, NormalizedData>> = ({ normalizedData }) => {
	const i18n = useI18n();

	return (
		<BaseLayout htmlTitle={i18n('privacy-policy__page-title')} {...(normalizedData || {})}>
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

export const runtime = 'edge';
export { Page as default };
