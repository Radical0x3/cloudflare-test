const { loadEnvConfig } = require('@next/env');

/**
 * Воспроизводит механику загрузки переменных окружения как при запуске Next.js приложения
 * @param {boolean} [silent]
 * @see https://nextjs.org/docs/basic-features/environment-variables#test-environment-variables
 */
module.exports = (silent) => {
	let info = null;
	if (silent) {
		info = console.info;
		console.info = () => undefined;
	}
	loadEnvConfig(process.cwd());
	if (info !== null) {
		console.info = info;
	}
};
