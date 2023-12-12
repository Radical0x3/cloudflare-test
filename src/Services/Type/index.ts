import * as guards from './guards';
import { asNumber } from './methods/asNumber';
import { asPlainObject } from './methods/asPlainObject';

export type { PrimitiveValue } from './types';
export const TypeService = {
	guards,
	asPlainObject,
	asNumber
};
