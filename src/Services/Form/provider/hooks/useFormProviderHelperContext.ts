import { useContext } from 'react';
import { HelperContext } from '../helper-context';
import type { FormProviderHelperContext } from '../types';

export const useFormProviderHelperContext = (): FormProviderHelperContext => useContext(HelperContext);
