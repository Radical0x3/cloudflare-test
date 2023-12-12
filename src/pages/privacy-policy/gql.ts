import { gql } from '@apollo/client';

export const GET_PRIVACY_POLICY_PAGE = gql`
	query GetPrivacyPolicyPage {
		globalSettings {
			privacy_policy
		}
	}
`;
