import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { autocompleteClasses, Popper } from '@mui/material';

export const classes = {
	root: HashService.className('ui-popper')
};

export const Root = styled(Popper, { label: classes.root })`
	box-sizing: border-box;

	.${autocompleteClasses.listbox} {
		padding: 0;
	}

	ul {
		padding: 0;
		margin: 0;
	}

	&._single-select,
	&._multiple-select {
		.${autocompleteClasses.listbox} li {
			&::before {
				content: '';
				display: block;
				width: 22px;
				height: 22px;
				background-color: ${({ theme }) => theme.palette.primary.main};
				margin-right: 8px;
				position: relative;
				top: -1px;
			}
		}
	}

	&._single-select {
		.${autocompleteClasses.listbox} li {
			&::before {
				mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'%3E%3C/path%3E%3C/svg%3E");
			}

			&[aria-selected='true'] {
				&::before {
					mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'%3E%3C/path%3E%3C/svg%3E");
				}
			}
		}
	}

	&._multiple-select {
		.${autocompleteClasses.listbox} li {
			&::before {
				mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'%3E%3C/path%3E%3C/svg%3E");
			}

			&[aria-selected='true'] {
				&::before {
					mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'%3E%3C/path%3E%3C/svg%3E");
				}
			}
		}
	}
`;
