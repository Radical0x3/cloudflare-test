/**
 * @typedef {Object} IntrospectTranslation
 * @property {string} key
 */

exports.normalize = (queryData) => {
	const { has_more_pages = false, data = [] } = queryData;

	if (has_more_pages) {
		console.error(`В запросе переводов получены не все результаты. Нужно увеличить лимит!`);
	}

	return data.filter((item) => item !== null).map((item) => item.key);
};
