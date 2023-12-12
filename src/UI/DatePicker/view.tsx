import { FC } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Paper, Root } from './styled';
import { UiDatePickerProps } from './types';
import { ru } from 'date-fns/locale';

export const UiDatePicker: FC<UiDatePickerProps> = (props) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
			<Root
				{...props}
				slots={{
					desktopPaper: Paper
				}}
			/>
		</LocalizationProvider>
	);
};
