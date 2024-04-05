import { gql } from '@apollo/client';

export const GLOBAL_SETTINGS_FRAGMENT = gql`
	fragment GlobalSettingsFragment on GlobalSettingType {
		id
		alias
		value
		group
	}
`;
