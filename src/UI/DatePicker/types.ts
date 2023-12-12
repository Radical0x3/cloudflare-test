import { DesktopDatePickerProps } from '@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker.types';

export interface UiDatePickerProps extends Omit<DesktopDatePickerProps<any>, 'renderInput'> {}
