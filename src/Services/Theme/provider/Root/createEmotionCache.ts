import createCache from '@emotion/cache';
import { EmotionCache } from '@emotion/react';
import prefixer from './stylis-plugins/prefixer';

export const createEmotionCache = (): EmotionCache => {
	return createCache({ key: 'x', stylisPlugins: [prefixer] });
};
