const fs = require('fs');
const path = require('path');
const glob = require('glob');
const fromCWD = require('from-cwd');
const tsConfig = require('../../../tsconfig.json');

/**
 * @see {@link https://regex101.com/r/b2FnTI/1}
 * @param {string} section
 * @param {string} folder
 * @return {RegExp}
 */
const createRegExp = (section, folder) => {
	return new RegExp(`\\sfrom\\s('|")${section}\\/${folder}('|"|\\/)`, 'gmi');
};

/**
 * @param {string} section
 * @param {string} globPattern
 * @return {string[]} problem paths
 */
const check = (section, globPattern) => {
	const sectionPath = fromCWD(tsConfig.compilerOptions.baseUrl, section);
	return glob
		.sync(globPattern)
		.map((filePath) => {
			const relative = path.relative(sectionPath, filePath);
			const folder = path.normalize(relative).split(path.sep).shift();
			const reqExp = createRegExp(section, folder);
			const content = fs.readFileSync(filePath).toString();
			const execArray = reqExp.exec(content);
			if (execArray !== null) {
				const line = content.slice(0, execArray.index).split('\n').length;
				return `${filePath}:${line}:0`;
			} else {
				return false;
			}
		})
		.filter(Boolean);
};

/**
 * @return {Promise<string[]>}
 */
module.exports = () =>
	Promise.resolve(
		Object.entries(tsConfig.compilerOptions.paths).reduce(
			/** @return {string[]} */ (acc, [key, paths]) => {
				const section = key.replace(/\/\*$/, '');
				const sectionPaths = Array.isArray(paths) ? paths : [paths];
				return [
					...acc,
					...sectionPaths.reduce(
						/** @return {string[]} */ (acc, path) => {
							const globPattern = fromCWD(
								tsConfig.compilerOptions.baseUrl,
								path.replace(/\/\*$/, ''),
								'/**/*.{ts,tsx}'
							);
							return [...acc, ...check(section, globPattern)];
						},
						[]
					)
				];
			},
			[]
		)
	);
