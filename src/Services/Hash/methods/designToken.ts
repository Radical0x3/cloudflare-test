import shortHash from 'short-hash';
import { HASH_DESIGN_TOKENS } from '../constants';

export function designToken<T extends string>(name: T, useHash = HASH_DESIGN_TOKENS): T {
	return useHash ? (('dt-' + shortHash<T>(name)) as T) : name;
}
