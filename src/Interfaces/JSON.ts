import { PlainObject } from './PlainObject';
import { PrimitiveValue } from './PrimitiveValue';

export type JSONParseResult = PrimitiveValue | PlainObject | any[];
