import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('breadcrumbs'),
	link: HashService.className('breadcrumbs__link')
};

export const Root = styled('div', { label: classes.root })`
	padding-bottom: 8px;

	.${classes.link} {
		display: block;
		max-width: 280px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

		svg {
			width: 20px;
			height: 20px;
			margin-right: 4px;
			vertical-align: bottom;
		}

		@media (hover: hover) {
			&[href]:hover {
				text-decoration: underline;
			}
		}
	}
`;
