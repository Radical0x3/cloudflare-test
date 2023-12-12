const fs = require('fs');
const path = require('path');
const { generate } = require('../index');
const { jestLogUnmute, jestLogMute } = require('@wezom/toolkit-jest');

describe('Метод должен считать `.env` файл и сгенерировать на его основе файл декларации типов `*.d.ts`', () => {
	test('Проверка на демо файлах', () => {
		const sourceFile = path.join(__dirname, './fixtures/env.txt');
		const resultFile = path.join(__dirname, './fixtures/result.txt');
		const expectedResult = path.join(__dirname, './fixtures/expected.txt');

		jestLogMute();
		generate(sourceFile, resultFile);
		jestLogUnmute();

		const result = fs.readFileSync(resultFile).toString();
		const expected = fs.readFileSync(expectedResult).toString();
		expect(result).toStrictEqual(expected);
	});
});
