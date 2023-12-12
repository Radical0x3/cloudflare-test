import React, { ReactElement } from 'react';
import { UiBox } from 'UI/Box';
import { ErrorPreProps } from './types';

export const ErrorPre: React.FC<ErrorPreProps> = ({ children }): ReactElement => {
	return (
		<UiBox
			sx={{
				margin: 0,
				whiteSpace: 'pre-wrap',
				wordBreak: 'break-word'
			}}
		>
			{children}
		</UiBox>
	);
};
