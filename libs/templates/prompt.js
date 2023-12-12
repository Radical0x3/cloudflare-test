const inquirer = require('inquirer');
const path = require('path');
const { pascalCase } = require('pascal-case');
const chalk = require('chalk');
const { ERR_MSG_PROMPT_TTY, ERR_MSG_PROMPT_UNKNOWN, ERR_MSG_REQUIRED } = require('./constants');
const tpl = require('./tpl');

/**
 * @type {Record<string, string>}
 */
const types = {
	widget: 'Дефолтный виджет',
	page: 'Дефолтная страница роутинга',
	'ui-blank': 'Обертка-пустышка над MUI компонентом для реэкспорта'
};

/**
 * @param {string} [output]
 */
module.exports = (output) => {
	inquirer
		.prompt([
			{
				name: 'type',
				type: 'list',
				message: 'Выберите шаблон генерации',
				choices: Object.entries(types).map(([key, description]) => ({
					name: `\`${key}\` - ${description}`,
					value: key
				}))
			},
			{
				name: 'outputDir',
				type: 'input',
				message: 'Путь к директории генерации (src/...)',
				default: output,
				validate(input, answers) {
					if (!input) {
						return ERR_MSG_REQUIRED;
					} else {
						return true;
					}
				}
			},
			{
				name: 'entityName',
				type: 'input',
				message: 'Имя генерируемой сущности',
				default: (answers) => pascalCase(path.basename(answers.outputDir)),
				validate(input, answers) {
					if (!input) {
						return ERR_MSG_REQUIRED;
					} else {
						return true;
					}
				}
			}
		])
		.then((answers) => {
			tpl(answers);
		})
		.catch((error) => {
			console.log(error);
			if (error.isTtyError) {
				console.log(chalk.red(ERR_MSG_PROMPT_TTY));
			} else {
				console.log(chalk.red(ERR_MSG_PROMPT_UNKNOWN));
			}
		});
};
