const path = require('path');
const chalk = require('chalk');
const fromCWD = require('from-cwd');

/**
 * @param {string} output
 * @return {string}
 * @private
 */
const _source = (output) => {
	output = path.isAbsolute(output) ? path.relative(fromCWD(), path.normalize(output)) : output;
	return output.replace(/^\.?\//, '');
};

const logger = {
	/** @param {string} process */
	start(process) {
		console.log(chalk.blueBright(process + '...'));
	},

	done() {
		console.log(chalk.green('Done!'));
	},

	/**
	 * @param {string} output
	 * @param {boolean} [withDoneLog]
	 */
	outputDone(output, withDoneLog = true) {
		logger.source(output);
		withDoneLog && logger.done();
	},

	/**
	 * @param {string} output
	 */
	source(output) {
		output = _source(output);
		output = /\d+:\d+$/.test(output) ? output : `${output}:0:0`;
		console.log(chalk.magenta(output));
	},

	/**
	 * @param {string} folder
	 * @param {boolean} [withDoneLog]
	 */
	folderDone(folder, withDoneLog = true) {
		folder = _source(folder);
		console.log(chalk.magenta(folder));
		withDoneLog && logger.done();
	},

	/** @param {string} message */
	warn(message) {
		console.log(chalk.yellow(message));
	},

	/** @param {any} error */
	error(error) {
		const message = error instanceof Error ? error.message : 'UNKNOWN ERR';
		console.log(chalk.red(message));
	},

	divider() {
		console.log('');
	}
};

module.exports = logger;
