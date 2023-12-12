import { css, SerializedStyles } from '@emotion/react';
import { uiContainerCssVars } from 'UI/Container';
import { Theme } from '../../themes/types';

export default function _globalStyles(theme: Theme): SerializedStyles {
	return css`
		:root {
			--nprogress-color: ${theme.palette.secondary.light};
			--${uiContainerCssVars.width}: 1720px;
			--${uiContainerCssVars.xGap}: 24px;
		}

		html {
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			-webkit-text-size-adjust: 100%;
			box-sizing: border-box;
			font-size: 100%;
			height: 100%;
			
			&._is-csr {
				& ::-webkit-scrollbar {
					width: 8px;
					height: 8px;
				}

				& ::-webkit-scrollbar-track {
					background-color: transparent;
					border-radius: 4px;
				}

				& ::-webkit-scrollbar-thumb {
					background-color: ${theme.palette.grey[400]};
					transition: background-color 0.3s;
					border: 2px solid rgba(0, 0, 0, 0);
					background-clip: padding-box;
					border-radius: 9999px;

					&:hover {
						background-color: ${theme.palette.grey[600]};
					}
				}
			}
		}

		*,
		*::before,
		*::after {
			box-sizing: inherit;
		}

		strong,
		b {
			font-weight: 700;
		}

		body {
			margin: 0;
			color: ${theme.palette.text.primary};
			font-family: ${theme.typography.fontFamily};
			font-weight: ${theme.typography.body1.fontWeight};
			font-size: ${theme.typography.body1.fontSize};
			line-height: ${theme.typography.body1.lineHeight};
			letter-spacing: ${theme.typography.body1.letterSpacing};
			background-color: ${theme.palette.background.default};
			height: 100%;
			overflow-x: hidden;
		}

		@media print {
			body {
				background-color: ${theme.palette.common.white};
				color: ${theme.palette.common.black};
			}
		}

		body::backdrop {
			background-color: ${theme.palette.common.white};
		}
		
		#__next {
			height: 100%;
		}

		button,
		input,
		textarea,
		select {
			font: inherit;
		}

		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		input[type=number] {
			-moz-appearance: textfield;
		}
		
		._hide {
			display: none !important;
		}

		._xsm-show {
			@media (max-width: 479px) {
				display: none !important;
			}
		}

		._xsm-hide {
			@media (min-width: 480px) {
				display: none !important;
			}
		}

		._sm-show {
			@media (max-width: ${theme.breakpoints.values.sm - 1}px) {
				display: none !important;
			}
		}

		._sm-hide {
			@media (min-width: ${theme.breakpoints.values.sm}px) {
				display: none !important;
			}
		}

		._md-show {
			@media (max-width: ${theme.breakpoints.values.md - 1}px) {
				display: none !important;
			}
		}

		._md-hide {
			@media (min-width: ${theme.breakpoints.values.md}px) {
				display: none !important;
			}
		}
		
		._lg-show {
			@media (max-width: ${theme.breakpoints.values.lg - 1}px) {
				display: none !important;
			}
		}

		._lg-hide {
			@media (min-width: ${theme.breakpoints.values.lg}px) {
				display: none !important;
			}
		}

		._xl-show {
			@media (max-width: ${theme.breakpoints.values.xl - 1}px) {
				display: none !important;
			}
		}

		._xl-hide {
			@media (min-width: ${theme.breakpoints.values.xl}px) {
				display: none !important;
			}
		}
	`;
}
