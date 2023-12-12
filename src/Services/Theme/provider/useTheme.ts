import { useTheme as useMuiTheme } from '@mui/material/styles';
import { Theme } from '../themes/types';

export const useTheme: () => Theme = useMuiTheme;
