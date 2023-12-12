const tsConfig = require('./tsconfig.json');

module.exports = {
	clearMocks: true,
	collectCoverage: true,
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '<rootDir>/jest.setup.js'],
	cacheDirectory: '<rootDir>/.cache/jest',
	coverageReporters: ['json-summary', 'lcov'],
	displayName: 'tsc',
	testEnvironment: 'node',
	moduleDirectories: ['node_modules', 'src'],
	moduleFileExtensions: ['tsx', 'ts', 'js', 'node'],
	modulePathIgnorePatterns: [
		'<rootDir>/.cache',
		'<rootDir>/.next',
		'<rootDir>/.refs',
		'<rootDir>/coverage',
		'<rootDir>/libs/logger',
		'<rootDir>/node_modules',
		'<rootDir>/src/Services/GQL/generated',
		'<rootDir>/src/Services/I18n/generated',
		'<rootDir>/src/pages'
	],
	transform: {
		'.(ts|tsx)': [
			'ts-jest',
			{
				...tsConfig.compilerOptions,
				jsx: 'react-jsx'
			}
		]
	}
};
