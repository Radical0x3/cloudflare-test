export const firstCharToUpperCase = (str?: string | null): string => {
	if (!str) {
		return '';
	}
	const text = str.replace(/_/g, ' ');
	return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
