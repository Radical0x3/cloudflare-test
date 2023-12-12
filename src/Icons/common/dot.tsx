import { FC } from 'react';
import { SvgIcon } from '@mui/material';

export const DotIcon: FC = (props) => (
	<SvgIcon viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 16C14.2091 16 16 14.2092 16 12C16 9.79091 14.2091 8.00005 12 8.00005C9.79086 8.00005 8 9.79091 8 12C8 14.2092 9.79086 16 12 16Z"
		/>
	</SvgIcon>
);
