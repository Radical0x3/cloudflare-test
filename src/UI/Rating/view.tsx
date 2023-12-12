import { FC } from 'react';
import { Root } from './styled';
import { UiRatingProps } from './types';
import StarIcon from '@mui/icons-material/Star';

export const UiRating: FC<UiRatingProps> = (props) => {
	return <Root icon={<StarIcon />} emptyIcon={<StarIcon />} {...props} />;
};
