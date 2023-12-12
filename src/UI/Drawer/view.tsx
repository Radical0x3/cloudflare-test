import { FC } from 'react';
import { UiDrawerProps } from './types';
import { Root } from './styled';

export const UiDrawer: FC<UiDrawerProps> = (props) => <Root {...props} />;
