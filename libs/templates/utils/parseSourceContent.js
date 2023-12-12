const path = require('path');
const fromCWD = require('from-cwd');
const { pascalCase } = require('pascal-case');
const { constantCase } = require('constant-case');
const { camelCase } = require('camel-case');
const { paramCase } = require('param-case');

const {
	REGEXP_MARKER_CAMEL,
	REGEXP_MARKER_CONSTANT,
	REGEXP_MARKER_PARAM,
	REGEXP_MARKER_PASCAL,
	REGEXP_MARKER_ROUTE_HREF
} = require('../constants');

/**
 * @param {Object} data
 * @param {string} data.content
 * @param {string} data.entityName
 * @param {string} data.sourceType
 * @param {string} data.file - absolute path
 * @return string
 */
module.exports = function parseSourceContent({ content, entityName, sourceType, file }) {
	content = content
		.replace(REGEXP_MARKER_CAMEL, camelCase(entityName))
		.replace(REGEXP_MARKER_PASCAL, pascalCase(entityName))
		.replace(REGEXP_MARKER_CONSTANT, constantCase(entityName))
		.replace(REGEXP_MARKER_PARAM, paramCase(entityName));
	if (sourceType === 'page' || sourceType === 'page-dev' || sourceType === 'api') {
		const srcDir = fromCWD('src/pages');
		const href = '/' + path.dirname(path.relative(srcDir, file)).replace(/\\/g, '/');
		content = content.replace(REGEXP_MARKER_ROUTE_HREF, href);
	}
	return content;
};
