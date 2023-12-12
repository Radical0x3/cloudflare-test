import { PlainObject } from 'Interfaces/PlainObject';
import { TKey } from '../generated';

export interface I18nFn {
	(tKey: TKey | string, values?: PlainObject): string;
}
