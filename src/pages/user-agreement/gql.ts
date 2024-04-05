import { gql } from '@apollo/client';
import { GLOBAL_SETTINGS_FRAGMENT } from 'Services/GQL';

export const GET_USER_AGREEMENT_PAGE = gql`
	query GetUserAgreementPage {
		globalSettings(group: "pages") {
			...GlobalSettingsFragment
		}
	}
	${GLOBAL_SETTINGS_FRAGMENT}
`;
