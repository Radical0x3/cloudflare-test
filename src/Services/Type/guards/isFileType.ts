export const isFileType = (data: unknown): data is File => {
	if (typeof File !== 'undefined' && data instanceof File) {
		return true;
	}
	if (typeof data === 'object' && data !== null && 'name' in data) {
		return true;
	}
	return false;
};
