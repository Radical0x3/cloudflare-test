import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { tabsClasses } from '@mui/material';
import { MUI_SELECTED_CLASS_NAME } from 'Services/Theme/constants';

export const classes = {
	root: HashService.className('translations-tabs'),
	tab: HashService.className('translations-tabs__tab'),
	tabError: HashService.className('translations-tabs__tab--error'),
	container: HashService.className('translations-tabs__container'),
	containerActive: HashService.className('translations-tabs__container--active')
};

export const Root = styled('div', { label: classes.root })`
	.${classes.container} {
		margin-top: 24px;
		display: none;

		&.${classes.containerActive} {
			display: block;
		}
	}

	.${classes.tab} {
		padding-top: 0;
		padding-bottom: 0;
		border-bottom: 2px solid transparent;
		min-height: 56px;

		&.${MUI_SELECTED_CLASS_NAME} {
			border-color: ${({ theme }) => theme.palette.primary.main};
		}

		&.${classes.tabError} {
			color: ${({ theme }) => theme.palette.error.main};

			&.${MUI_SELECTED_CLASS_NAME} {
				border-color: ${({ theme }) => theme.palette.error.main};
			}
		}
	}

	.${tabsClasses.root} {
		border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
	}

	.${tabsClasses.indicator} {
		background-color: transparent;
	}
`;
