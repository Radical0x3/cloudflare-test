const tpl = require('../tpl');
const fs = require('fs');
const del = require('del');
const path = require('path');
const fromCWD = require('from-cwd');
const { jestLogMute, jestLogUnmute } = require('@wezom/toolkit-jest');
const getSources = require('../utils/getSources');
const getDestination = require('../utils/getDestination');

const silent = true;

describe('Should generate types', () => {
	['ui-blank'].forEach((type) => {
		const outputDir = `.cache/artifacts/libs/templates/type-${type}`;

		// clean prev test artifacts
		del.sync(fromCWD(outputDir));

		const testCases = [
			{
				subDir: 'custom-entity-name',
				entityName: 'MyCustom'
			}
		];

		if (silent) {
			beforeAll(() => jestLogMute());
			afterAll(() => jestLogUnmute());
		}

		testCases.forEach(({ subDir, entityName }) => {
			test(type, () => {
				const _outputDir = path.join(outputDir, subDir);
				tpl({
					type,
					outputDir: _outputDir,
					entityName
				});
				const sources = getSources(type);
				expect(
					sources.every((source) => {
						return fs.existsSync(getDestination(type, _outputDir, source));
					})
				).toBeTruthy();
			});
		});
	});
});
