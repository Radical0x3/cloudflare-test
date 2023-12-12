import { FC, Fragment, ReactElement } from 'react';
import type { RenderProps } from './types';

export const Render: FC<RenderProps> = (props): ReactElement => {
	if (props.if === true) {
		return <>{props.children}</>;
	} else {
		return <Fragment />;
	}
};
