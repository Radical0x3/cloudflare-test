const path = require('path');
const glob = require('glob');
const { localSourcePath } = require('./constants');

/**
 * @param {string} dir
 * @return {string[]}
 */
module.exports = function getSources(dir) {
	return glob.sync(path.join(__dirname, localSourcePath, dir, '/**/**.txt'));
};
