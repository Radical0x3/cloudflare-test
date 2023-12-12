export const isEnum =
	<T>(e: T) =>
	(key: any): key is T[keyof T] =>
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		Object.values(e).includes(key);
