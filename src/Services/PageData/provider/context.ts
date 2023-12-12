import { createContext, useContext } from 'react';
import { PageDataContext } from './types';

const Context = createContext<PageDataContext>({
	htmlTitle: '',
	breadcrumbs: []
});

export { Context as default };
export const usePageDataContext = (): PageDataContext => useContext(Context);
