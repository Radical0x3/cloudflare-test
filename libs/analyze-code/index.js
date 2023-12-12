const checkSelfImports = require('./check-self-imports');
const logger = require('../logger');

logger.start('Check self imports');
checkSelfImports().then((warnings) => {
	if (warnings.length) {
		logger.warn('Found `self imports` in App root folders');
		warnings.forEach(logger.source);
		process.exit(1);
	} else {
		logger.done();
	}
});
