import shortHash from 'short-hash';
import { HASH_CLASS_NAMES } from '../constants';

export function className<T extends string>(name: T, useHash = HASH_CLASS_NAMES): T {
	return useHash ? (('_c' + shortHash<T>(name)) as T) : name;
}
