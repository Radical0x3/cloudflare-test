import { gql } from '@apollo/client';

export const GET_USER_AGREEMENT_PAGE = gql`
	query GetUserAgreementPage {
		globalSettings {
			user_agreement
		}
	}
`;
