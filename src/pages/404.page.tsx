import { AppPage } from 'Interfaces/AppPage';
import { SSRPublicPageProps } from 'Services/ServerSide';
import { ErrorBlock } from 'Widgets/ErrorBlock';
import { useI18n } from 'Services/I18n';
import { ErrorLayout } from 'Layouts/ErrorLayout';

type QueriedData = null;
type QueryVariables = null;
type NormalizedData = null;

const Page: AppPage<SSRPublicPageProps<QueriedData, QueryVariables, NormalizedData>> = () => {
	const i18n = useI18n();

	return (
		<ErrorLayout htmlTitle={i18n('error-404__title')}>
			<ErrorBlock statusCode={404} />
		</ErrorLayout>
	);
};

export { Page as default };
