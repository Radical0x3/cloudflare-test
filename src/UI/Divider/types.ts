import { BoxProps } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { DividerPropsVariantOverrides } from '@mui/material/Divider/Divider';

export interface UiDividerProps extends BoxProps {
	orientation?: 'horizontal' | 'vertical';
	flexItem?: boolean;
	variant?: OverridableStringUnion<'fullWidth' | 'inset' | 'middle', DividerPropsVariantOverrides>;
}
