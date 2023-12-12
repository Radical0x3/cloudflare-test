import { PlainObject } from 'Interfaces/PlainObject';
import { cloneJSON } from './cloneJSON';

export function cleanTypeNames<T extends PlainObject>(value: T): T {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return cloneJSON(value, (k, v) => {
		if (k === '__typename') {
			return undefined;
		} else {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return v;
		}
	});
}
