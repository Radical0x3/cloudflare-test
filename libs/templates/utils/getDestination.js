const path = require('path');
const { localSourcePath } = require('./constants');

/**
 * @param {string} typeDir
 * @param {string} outputDir
 * @param {string} source
 * @return {string}
 */
module.exports = function getDestination(typeDir, outputDir, source) {
	const relative = path.join(__dirname, localSourcePath, typeDir);
	const name = path.relative(relative, source).replace(/\.txt$/, '');
	return path.join(outputDir, name);
};
