import { gql } from '@apollo/client';

export const USER_UNSUBSCRIBE = gql`
	mutation UserUnsubscribe($token: String!) {
		userNotificationsUnsubscribe(token: $token)
	}
`;
