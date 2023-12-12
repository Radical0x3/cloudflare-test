import { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useI18n } from 'Services/I18n';
import { UiInputAdornment } from 'UI/InputAdornment';
import { UiTooltip } from 'UI/Tooltip';
import { UiIconButton } from 'UI/IconButton';
import { Root } from './styled';
import { UiTextFieldSearchProps } from './types';

export const UiTextFieldSearch: FC<UiTextFieldSearchProps> = ({ onClear, ...props }) => {
	const i18n = useI18n();

	return (
		<Root
			{...props}
			type="search"
			InputProps={{
				startAdornment: (
					<UiInputAdornment position="start">
						<SearchIcon />
					</UiInputAdornment>
				),
				endAdornment:
					props.value && onClear ? (
						<UiInputAdornment position="end">
							<UiTooltip title={i18n('field-search__clear-icon-label')}>
								<UiIconButton
									color={'secondary'}
									size={'small'}
									aria-label={i18n('field-search__clear-icon-label')}
									onClick={onClear}
									onMouseDown={onClear}
								>
									<CloseIcon />
								</UiIconButton>
							</UiTooltip>
						</UiInputAdornment>
					) : undefined
			}}
		/>
	);
};
