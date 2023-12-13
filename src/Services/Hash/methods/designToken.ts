import shortHash from 'short-hash';

export function designToken<T extends string>(name: T, useHash?: boolean): T {
	return useHash ? (('dt-' + shortHash<T>(name)) as T) : name;
}
