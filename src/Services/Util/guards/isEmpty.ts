import isEmpty from 'lodash.isempty';
export function isElementEmpty(value?: any): boolean {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return isEmpty(value);
}
