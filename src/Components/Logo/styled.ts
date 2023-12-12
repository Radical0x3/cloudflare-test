import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('logo'),
	sizeSmall: HashService.className('logo--size-small'),
	link: HashService.className('logo__link'),
	image: HashService.className('logo__image')
};

export const Root = styled('div', { label: classes.root })`
	&.${classes.sizeSmall} {
		.${classes.image} {
			width: 173px;
			height: 74px;
		}
	}

	.${classes.link} {
		display: block;
		text-decoration: none;

		picture {
			width: 100px;

			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
	}

	.${classes.image} {
		display: block;
		text-decoration: none;
		width: 198px;
		height: 86px;
		color: ${({ theme }) => theme.palette.warning.main};
		transition: color 0.3s cubic-bezier(0.12, 0.77, 0.16, 0.93);

		svg {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
`;
