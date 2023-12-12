/** fake graphql-tag for highlight */
const gql = (template) => String.raw(template);

exports.query = JSON.stringify({
	variables: {
		locale: [process.env.NEXT_PUBLIC_I18N_DEFAULT_LOCALE],
		place: [process.env.NEXT_PUBLIC_I18N_CURRENT_PLACE]
	},
	query: gql`
		query IntrospectTranslations($locale: [String]!, $place: [String]!) {
			i18n: translatesSimple(lang: $locale, place: $place) {
				key
				text
			}
		}
	`
});
