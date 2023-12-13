import shortHash from 'short-hash';

export function className<T extends string>(name: T, useHash?: boolean): T {
	return useHash ? (('_c' + shortHash<T>(name)) as T) : name;
}
