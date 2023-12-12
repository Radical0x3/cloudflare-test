import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('wysiwyg')
};

export const Root = styled('div', { label: classes.root })`
	font-size: 16px;
	color: ${({ theme }) => theme.palette.text.primary};
	line-height: 1.6;

	* {
		/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */
		&:first-child {
			margin-top: 0;
		}

		&:last-child {
			margin-bottom: 0;
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 1.75rem;
		margin-bottom: 1.75rem;
		color: ${({ theme }) => theme.palette.secondary.main};
		font-weight: 700;
		line-height: 1.2;
	}

	p,
	div,
	ul,
	ol {
		margin-top: 1.75em;
		margin-bottom: 1.75em;
	}

	h1 {
		font-size: 2.5em;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.xl}px) {
			font-size: 4em;
		}
	}

	h2 {
		font-size: 2em;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.xl}px) {
			font-size: 3.25em;
		}
	}

	h3 {
		font-size: 1.5em;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.xl}px) {
			font-size: 2.5em;
		}
	}

	h4 {
		font-size: 1.25em;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.xl}px) {
			font-size: 1.5em;
		}
	}

	h5 {
		font-size: 1.3em;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.xl}px) {
			font-size: 1.4em;
		}
	}

	h6 {
		font-size: 1.2em;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.xl}px) {
			font-size: 1.3em;
		}
	}

	.line {
		border-left: 4px solid ${({ theme }) => theme.palette.primary.main};
		padding-left: 1em;
		font-weight: 700;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.xl}px) {
			padding-left: 2.5em;
		}
	}

	a {
		display: inline-block;
		max-width: 100%;
		color: ${({ theme }) => theme.palette.text.primary};
		position: relative;
		text-decoration: none;
		transition: color 0.3s;

		&[href]::after {
			content: '';
			position: absolute;
			bottom: 3px;
			left: 0;
			width: 100%;
			height: 1px;
			background-color: ${({ theme }) => theme.palette.text.primary};
			transition: background-color 0.3s;
		}

		@media (hover: hover) {
			&[href]:hover {
				color: ${({ theme }) => theme.palette.primary.light};
			}

			&[href]:hover::after {
				background-color: ${({ theme }) => theme.palette.primary.light};
			}
		}
	}

	ul {
		padding-left: 24px;

		li {
			list-style-type: none;
			position: relative;

			&::before {
				content: '';
				width: 5px;
				height: 5px;
				border-radius: 50%;
				background-color: ${({ theme }) => theme.palette.text.primary};
				position: absolute;
				top: 10px;
				left: -15px;
			}
		}
	}

	table {
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0;
		border: 1px solid ${({ theme }) => theme.palette.grey[300]};

		tbody,
		tfoot,
		thead,
		tr,
		th,
		td {
			border: inherit;
		}

		th,
		td {
			padding: 0.5em;
			text-align: left;
			vertical-align: top;
		}

		th {
			font-weight: bold;
			text-align: center;
		}
	}

	iframe {
		width: 100%;
		border-width: 0;
	}

	video {
		width: 100%;
		height: auto;
		aspect-ratio: 4/3;
	}

	audio {
		width: 100%;
	}

	audio[controls] {
		display: block;
	}

	code,
	kbd,
	samp {
		font-family: monospace;
		padding: 0.1em 6px;
		white-space: normal;
		hyphens: none;
		tab-size: 4;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;
		text-align: left;
		color: ${({ theme }) => theme.palette.secondary.contrastText};
		background-color: ${({ theme }) => theme.palette.secondary.main};
	}

	pre {
		overflow: auto;
	}

	img {
		max-width: 100%;
		height: auto;
		border-radius: 12px;
		position: relative;

		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: ${({ theme }) => theme.palette.grey[500]};
		}
	}

	blockquote {
		margin-left: 0;
		margin-right: 0;
		padding: 16px 24px;
		background-color: ${({ theme }) => theme.palette.grey[50]};
		border-radius: 8px;
		border-left: 5px solid ${({ theme }) => theme.palette.primary.light};
		font-style: italic;
	}
`;
