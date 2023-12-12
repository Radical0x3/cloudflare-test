import { FC } from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Root } from './styled';
import { UiBreadcrumbsProps } from './types';

export const UiBreadcrumbs: FC<UiBreadcrumbsProps> = (props) => {
	return <Root {...props} separator={<ArrowForwardIosOutlinedIcon />} />;
};
