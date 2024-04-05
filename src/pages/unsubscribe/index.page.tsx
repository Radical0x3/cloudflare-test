import { AppPage } from 'Interfaces/AppPage';
import { PropsResult, SSRPublicPageProps } from 'Services/ServerSide';
import { BaseLayout } from 'Layouts/BaseLayout';
import { useI18n } from 'Services/I18n';
import { Unsubscribe } from 'Widgets/Unsubscribe';
import { Section } from 'Components/Section';
import { DownloadApp } from 'Widgets/DownloadApp';
import { useRouter } from 'next/router';
import { ErrorBlock } from 'Widgets/ErrorBlock';
import { ErrorLayout } from 'Layouts/ErrorLayout';
import { URLSearchService } from 'Services/URLSearch';

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
	const router = useRouter();
	const query = router.asPath.split('?');
	const urlParams = new URLSearchService(query[1]);
	const token = urlParams.getString('token');

	return token ? (
		<BaseLayout htmlTitle={i18n('unsubscribe__page-title')}>
			<Section>
				<Unsubscribe token={token} />
			</Section>
			<Section>
				<DownloadApp />
			</Section>
		</BaseLayout>
	) : (
		<ErrorLayout htmlTitle={i18n('error-404__title')}>
			<ErrorBlock statusCode={404} />
		</ErrorLayout>
	);
};

export { Page as default };
