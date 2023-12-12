import { AppPage } from 'Interfaces/AppPage';
import { SSR, SSRPublic, SSRPublicInitProps, SSRPublicPageProps } from 'Services/ServerSide';
import { BaseLayout } from 'Layouts/BaseLayout';
import { route } from './route';
import { GetUserAgreementPageQuery } from 'Services/GQL';
import { GET_USER_AGREEMENT_PAGE } from './gql';
import { useI18n } from 'Services/I18n';
import { Section } from 'Components/Section';
import { TitleBlock } from 'Widgets/TitleBlock';
import { DownloadApp } from 'Widgets/DownloadApp';
import { WysiwygBlock } from 'Widgets/WysiwygBlock';

type QueriedData = GetUserAgreementPageQuery;
type QueryVariables = null;
type NormalizedData = {
	userAgreement: string;
};

export const config = {
	runtime: 'edge'
};

export const getServerSideProps = new SSRPublic<SSRPublicInitProps<QueriedData, QueryVariables, NormalizedData>>({
	route,
	queryOptions: () => ({
		query: GET_USER_AGREEMENT_PAGE
	}),
	normalizeData: ({ globalSettings, ...data }) => {
		if (globalSettings.user_agreement) {
			return {
				...data,
				userAgreement: globalSettings.user_agreement
			};
		} else {
			return SSR.NOT_FOUND_RESULT;
		}
	}
}).getServerSideProps;

const Page: AppPage<SSRPublicPageProps<QueriedData, QueryVariables, NormalizedData>> = ({ normalizedData }) => {
	const i18n = useI18n();

	return (
		<BaseLayout htmlTitle={i18n('user-agreement__page-title')} {...(normalizedData || {})}>
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
