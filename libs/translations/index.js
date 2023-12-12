require('../environment/load')(true);
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const fromCWD = require('from-cwd');
const unfetch = require('isomorphic-unfetch');
const { query } = require('./query');
const { normalize } = require('./normalize');
const { template } = require('./template');
const logger = require('../logger');

/**
 * @param {string} url
 * @param {string} output
 * @return {Promise<void>}
 */
exports.fetch = (url = process.env.GRAPHQL_API, output = process.env.I18N_OUTPUT_TKEYS) => {
	logger.start('Generate translation keys');

	if (query) {
		return unfetch(url, {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: query
		})
			.then((result) => result.json())
			.then(({ data, error }) => {
				if (error !== undefined) {
					logger.error(error);
					throw new Error('NO TRANSLATIONS');
				}
				return data;
			})
			.then((data) => normalize(data?.i18n))
			.then((keys) => template(keys))
			.then((content) => {
				const file = fromCWD(output);
				mkdirp.sync(path.dirname(file));
				fs.writeFileSync(file, content);
				logger.outputDone(output);
			});
	} else {
		const file = fromCWD(output);
		mkdirp.sync(path.dirname(file));
		fs.writeFileSync(file, '');
		logger.outputDone(output);
	}
};
