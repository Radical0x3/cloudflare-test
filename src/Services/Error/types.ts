import type { GraphQLError } from 'graphql';
import { PlainObject } from 'Interfaces/PlainObject';
import type { ExtensionCategories } from './ExtensionCategories';

export interface GraphQLErrorExtValidation extends GraphQLError {
	extensions: {
		category: ExtensionCategories;
		validation: PlainObject<string[]>;
		[p: string]: any;
	};
}
