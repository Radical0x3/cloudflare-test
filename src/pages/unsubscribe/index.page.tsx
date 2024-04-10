import { AppPage } from 'Interfaces/AppPage';
import { PropsResult, SSRPublicPageProps } from 'Services/ServerSide';
import { BaseLayout } from 'Layouts/BaseLayout';
import { useI18n } from 'Services/I18n';
import { Unsubscribe } from 'Widgets/Unsubscribe';
import { Section } from 'Components/Section';
import { DownloadApp } from 'Widgets/DownloadApp';

type QueriedData = null;
type QueryVariables = null;
type NormalizedData = {
	serverData: {
		GRAPHQL_API: string;
	};
};

export const getStaticProps = (): PropsResult<{
	normalizedData: NormalizedData;
}> => {
	return {
		props: {
			normalizedData: {
				serverData: {
					GRAPHQL_API: process.env.GRAPHQL_API
				}
			}
		}
	};
};

const Page: AppPage<SSRPublicPageProps<QueriedData, QueryVariables, NormalizedData>> = () => {
	const i18n = useI18n();

	return (
		<BaseLayout htmlTitle={i18n('unsubscribe__page-title')}>
			<Section>
				<Unsubscribe />
			</Section>
			<Section>
				<DownloadApp />
			</Section>
		</BaseLayout>
	);
};

export { Page as default };
