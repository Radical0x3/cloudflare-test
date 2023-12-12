import { SSR } from '../SSR';
import { SSRPublicInitProps, SSRPublicQueryInjectData, InitPublicConfig } from './types';

export class SSRPublic<P extends SSRPublicInitProps<any, any, any>> extends SSR<P, SSRPublicQueryInjectData> {
	protected _name = 'SSRPublic';
	static readonly ERROR_VIEW_PATHNAME = '__ERROR-VIEW-PATHNAME__';

	// eslint-disable-next-line no-useless-constructor
	constructor(config: InitPublicConfig<P>) {
		super(config);
	}
}
