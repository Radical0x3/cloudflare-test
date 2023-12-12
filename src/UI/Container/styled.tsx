import { styled, jssRem, jssVar } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { uiContainerCssVars } from './css-vars';

export const classes = {
	root: HashService.className('ui-container'),
	sizeSmall: HashService.className('ui-container__size-small'),
	disableGutters: HashService.className('ui-container__disable-gutters')
};

export const Root = styled('div', { label: classes.root })`
	width: 100%;
	max-width: calc(${jssVar(uiContainerCssVars.width, 0)} + 2 * ${jssVar(uiContainerCssVars.xGap, 0)});
	margin-left: auto;
	margin-right: auto;
	padding-left: ${jssVar(uiContainerCssVars.xGap)};
	padding-right: ${jssVar(uiContainerCssVars.xGap)};

	@media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
		--${uiContainerCssVars.xGap}: ${jssRem(100)};
	}

	&.${classes.disableGutters} {
		--${uiContainerCssVars.xGap}: 0 !important;
	}

	&.${classes.sizeSmall} {
		max-width: calc(${jssVar(uiContainerCssVars.width)} + 2 * ${jssVar(uiContainerCssVars.xGap)});
		--${uiContainerCssVars.xGap}: 0 !important;
	}
`;
