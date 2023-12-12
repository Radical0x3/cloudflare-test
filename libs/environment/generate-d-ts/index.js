const fs = require('fs');
const template = require('./template');
const logger = require('../../logger');

const getComments = (lines, i) => {
	const comments = [];
	for (i--; i >= 0; i--) {
		const line = lines[i];
		if (/^#\s/.test(line) && !/^#\s---/.test(line)) {
			comments.push(line.replace('#', '//') + '\n');
		} else {
			break;
		}
	}
	return comments.reverse().join('');
};

exports.generate = (sourceFile, resultFile) => {
	logger.start('Parse .env files');
	const source = fs
		.readFileSync(sourceFile)
		.toString()
		.split(/\r?\n/)
		.reduce((acc, line, i, lines) => {
			if (/^[A-Z]/.test(line)) {
				line = line.replace(/(.+)\s?=\s?.+/, (str, name) => `${name}: string;`);
				line = `${getComments(lines, i)}${line}`;
				acc.push(line);
			}
			return acc;
		}, []);
	fs.writeFileSync(resultFile, template(source));
	logger.outputDone(resultFile);
};
