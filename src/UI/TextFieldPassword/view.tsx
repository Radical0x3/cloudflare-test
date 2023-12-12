import { FC, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { UiIconButton } from 'UI/IconButton';
import { Root } from './styled';
import { UiTextFieldPasswordProps } from './types';

export const UiTextPasswordField: FC<UiTextFieldPasswordProps> = ({ initialVisiblePassword, ...props }) => {
	const [visible, setVisible] = useState(!!initialVisiblePassword);

	return (
		<Root
			{...props}
			type={visible ? 'text' : 'password'}
			InputProps={{
				endAdornment: (
					<UiIconButton
						color={'secondary'}
						size={'small'}
						aria-label={'Toggle password'}
						onClick={() => setVisible((prev) => !prev)}
						onMouseDown={(event) => event.preventDefault()}
					>
						{visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
					</UiIconButton>
				)
			}}
		/>
	);
};
