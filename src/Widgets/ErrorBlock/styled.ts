import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';

export const classes = {
	root: HashService.className('error-block'),
	content: HashService.className('error-block__content'),
	statusCode: HashService.className('error-block__status-code'),
	stars: HashService.className('error-block__stars')
};

export const Root = styled('div', { label: classes.root })`
	width: 100%;
	height: 100%;
	padding: 60px 0;
	margin: auto;
	text-align: center;
	position: relative;
	overflow: hidden;

	.${classes.content} {
		position: relative;
		z-index: 2;
	}

	.${classes.statusCode} {
		color: ${({ theme }) => theme.palette.primary.contrastText};
		font-size: 104px;
		line-height: 0.8;
		font-weight: 700;
		letter-spacing: 6px;
		margin-bottom: 32px;

		@media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
			font-size: 230px;
			letter-spacing: 24px;
			margin-bottom: 40px;
		}
	}

	.${classes.stars} {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		min-width: 1310px;
		height: calc(100vh - 100px);
		z-index: 1;

		img {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			width: 1310px;
			max-width: 1310px;
			object-fit: contain;

			@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
				width: 100%;
			}
		}
	}
`;
