const enabled = process.env.NEXT_PUBLIC_ENABLE_DEV_TOOLS === '1';

const _console = {
	log: (...msg: any[]): void => (enabled ? console.log(...msg) : undefined),
	done: (...msg: any[]): void => (enabled ? console.log('🟩 DONE:', ...msg) : undefined),
	info: (...msg: any[]): void => (enabled ? console.info('🟦 INFO:', ...msg) : undefined),
	warn: (...msg: any[]): void => (enabled ? console.warn('🟨 WARN:', ...msg) : undefined),
	error: (...msg: any[]): void => (enabled ? console.error('🟥 ERROR:', ...msg) : undefined),
	table: (...msg: any[]): void => (enabled ? console.table(...msg) : undefined)
};

export { _console as default };
