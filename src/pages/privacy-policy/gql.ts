import { gql } from '@apollo/client';
import { GLOBAL_SETTINGS_FRAGMENT } from 'Services/GQL';

export const GET_PRIVACY_POLICY_PAGE = gql`
	query GetPrivacyPolicyPage {
		globalSettings(group: "pages") {
			...GlobalSettingsFragment
		}
	}
	${GLOBAL_SETTINGS_FRAGMENT}
`;
