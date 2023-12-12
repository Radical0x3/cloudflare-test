import { FC } from 'react';
import { Root } from './styled';
import { StickyBlockProps } from './types';

export const StickyBlock: FC<StickyBlockProps> = ({ children }) => {
	return <Root>{children}</Root>;
};
