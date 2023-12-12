import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { UiImgUnstyled } from './view';

export const classes = {
	root: HashService.className('ui-img'),
	effect: HashService.className('ui-img--effect'),
	load: HashService.className('ui-img--load')
};

export const UiImg = styled(UiImgUnstyled, { label: classes.root })`
	display: block;
	position: relative;
	overflow: hidden;

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}

	html._is-csr &.${classes.effect} {
		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: ${({ theme }) => theme.palette.grey[500]};
			z-index: 1;
			transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1);
		}

		&.${classes.load} {
			&::before {
				opacity: 0;
			}
		}
	}
`;
