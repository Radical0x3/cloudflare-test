export function splitKey(joined: string): [string, string] {
	const [module, ...entities] = joined.split('__');
	return [module, entities.join('__')];
}
