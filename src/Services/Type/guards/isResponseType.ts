import { FormProviderResponseType } from 'Services/Form';
import { isPlainObject } from './isPlainObject';

export const isResponseType = (data: unknown): data is FormProviderResponseType => {
	return isPlainObject(data) && data.type !== undefined && data.message !== undefined;
};
