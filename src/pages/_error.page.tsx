import { AppPage } from 'Interfaces/AppPage';
import { PageRoute } from 'Services/PageRoute';
import { SSRPublic, SSRPublicInitProps, SSRPublicPageProps } from 'Services/ServerSide';
import { ErrorBlock } from 'Widgets/ErrorBlock';
import { useI18n } from 'Services/I18n';
import { ErrorLayout } from 'Layouts/ErrorLayout';

type QueriedData = null;
type QueryVariables = null;
type NormalizedData = null;

export const runtime = process.env.RUNTIME;

export const getServerSideProps = new SSRPublic<SSRPublicInitProps<QueriedData, QueryVariables, NormalizedData>>({
	route: new PageRoute({ pathname: SSRPublic.ERROR_VIEW_PATHNAME }),
	queryOptions: null,
	normalizeData: null
}).getServerSideProps;

const Page: AppPage<SSRPublicPageProps<QueriedData, QueryVariables, NormalizedData>> = ({
	normalizedData,
	statusCode
}) => {
	const i18n = useI18n();

	return (
		<ErrorLayout htmlTitle={`${i18n('error__title')} ${statusCode}`} {...(normalizedData || {})}>
			<ErrorBlock statusCode={statusCode} />
		</ErrorLayout>
	);
};

export { Page as default };
