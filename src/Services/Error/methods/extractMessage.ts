export const extractMessage = (err: unknown, fallbackMsg = 'unknown-error__something-went-wrong'): string => {
	if (err instanceof Error) {
		return err.message;
	} else if (typeof err === 'string') {
		return err;
	}
	return fallbackMsg;
};
