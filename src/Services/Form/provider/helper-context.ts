import { createContext } from 'react';
import { FormProviderHelperContext } from './types';

export const HelperContext = createContext<FormProviderHelperContext>({
	triggerSubmit: () => Promise.resolve()
});
