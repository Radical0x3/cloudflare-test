const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const fromCWD = require('from-cwd');
const mkdirp = require('mkdirp');
const del = require('del');
const getSources = require('./utils/getSources');
const getDestination = require('./utils/getDestination');
const parseSourceContent = require('./utils/parseSourceContent');
const logger = require('../logger');
const { generate } = require('../routes');
const {
	ERR_MSG_UNKNOWN_TYPE,
	ERR_MSG_FILES_EXIST,
	MSG_REMOVE_PREV_TPL,
	ERR_MSG_PROMPT_TTY,
	ERR_MSG_PROMPT_UNKNOWN
} = require('./constants');

/**
 * @param {string} msg
 * @throws
 */
const stopProcess = (msg) => {
	logger.error(msg);
	throw new Error(msg);
};

/**
 * @param {Object} data
 * @param {string} data.type
 * @param {string} data.outputDir
 * @param {string} data.entityName
 * @return {void}
 */
module.exports = function ({ type, outputDir, entityName }) {
	switch (type) {
		case 'ui-blank':
		case 'widget':
			checkSources(type);
			break;
		case 'page':
			checkSources(type);
			generate();
			break;

		default:
			stopProcess(ERR_MSG_UNKNOWN_TYPE);
	}

	/**
	 * @param {string} source
	 * @param {string} typeDir
	 */
	function cloneSource(source, typeDir) {
		const file = getDestination(typeDir, outputDir, source);
		mkdirp.sync(fromCWD(path.dirname(file)));
		fs.writeFileSync(
			file,
			parseSourceContent({
				content: fs.readFileSync(source, 'utf-8').toString(),
				entityName,
				sourceType: typeDir,
				file
			})
		);
		logger.outputDone(file, false);
	}

	/**
	 * @param {string} typeDir
	 */
	function generateFromDir(typeDir) {
		logger.start('Generate templates');
		getSources(typeDir).forEach((source) => cloneSource(source, typeDir));
		logger.done();
	}

	/**
	 * @param {string} typeDir
	 */
	function checkSources(typeDir) {
		logger.start('Checking');
		const existSources = fs.existsSync(outputDir) ? fs.readdirSync(outputDir) : [];
		if (existSources.length > 0) {
			logger.warn(ERR_MSG_FILES_EXIST.replace('%DIR%', outputDir));
			inquirer
				.prompt([
					{
						type: 'confirm',
						name: 'rewrite',
						default: false,
						message: MSG_REMOVE_PREV_TPL
					}
				])
				.then(({ rewrite }) => {
					if (rewrite) {
						del.sync(outputDir);
						generateFromDir(typeDir);
					}
				})
				.catch((error) => {
					logger.error('Error!');
					logger.error(error);
					if (error.isTtyError) {
						logger.error(ERR_MSG_PROMPT_TTY);
					} else {
						logger.error(ERR_MSG_PROMPT_UNKNOWN);
					}
				});
		} else {
			generateFromDir(typeDir);
		}
	}
};
