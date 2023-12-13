import { AppPage } from 'Interfaces/AppPage';
import { RoutesService } from 'Services/Routes';
import { SSRPublic, SSRPublicInitProps, SSRPublicPageProps } from 'Services/ServerSide';
import { useI18n } from 'Services/I18n';
import { BaseLayout } from 'Layouts/BaseLayout';
import { HomeTitle } from 'Widgets/HomeTitle';
import { HomeFeatures } from 'Widgets/HomeFeatures';
import { HomeFunctions } from 'Widgets/HomeFunctions';
import { Section } from 'Components/Section';
import { DownloadApp } from 'Widgets/DownloadApp';
import { HomeSlider } from 'Widgets/HomeSlider';

type QueriedData = null;
type QueryVariables = null;
type NormalizedData = null;

export const runtime = 'experimental-edge';

export const getServerSideProps = new SSRPublic<SSRPublicInitProps<QueriedData, QueryVariables, NormalizedData>>({
	route: RoutesService._homepage,
	queryOptions: null,
	normalizeData: null
}).getServerSideProps;

const Page: AppPage<SSRPublicPageProps<QueriedData, QueryVariables, NormalizedData>> = ({ normalizedData }) => {
	const i18n = useI18n();

	return (
		<BaseLayout htmlTitle={i18n('home__title')} {...(normalizedData || {})}>
			<Section>
				<HomeTitle />
			</Section>
			<Section zIndex={2}>
				<HomeFeatures />
			</Section>
			<Section>
				<HomeFunctions />
			</Section>
			<Section>
				<HomeSlider />
			</Section>
			<Section>
				<DownloadApp />
			</Section>
		</BaseLayout>
	);
};

export { Page as default };
