import { FC } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import SaveIcon from '@mui/icons-material/Save';
import OutputRoundedIcon from '@mui/icons-material/OutputRounded';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useI18n } from 'Services/I18n';
import { FormValuesAction, useFormProviderHelperContext } from 'Services/Form';
import { UiButton } from 'UI/Button';
import { Owl } from 'Components/Owl';
import { Card } from 'Components/Card';
import { Root } from './styled';
import { FormButtonsProps } from './types';

export const FormButtons: FC<FormButtonsProps> = ({ saveAndClose, saveAndCreate, closeLink, disabled }) => {
	const i18n = useI18n();
	useController({ name: 'action' });
	const { setValue } = useFormContext();
	const { triggerSubmit } = useFormProviderHelperContext();

	const clickHandle = async (action: FormValuesAction): Promise<void> => {
		setValue('action', action);
		await triggerSubmit();
	};

	return (
		<Root>
			<Card>
				<Owl spacing={3}>
					<UiButton
						fullWidth
						startIcon={<SaveIcon />}
						disabled={!!disabled}
						onClick={() => clickHandle('save')}
					>
						{i18n('form__button-save')}
					</UiButton>
					{saveAndClose ? (
						<UiButton
							variant={'outlined'}
							fullWidth
							startIcon={<OutputRoundedIcon />}
							disabled={!!disabled}
							onClick={() => clickHandle('saveAndClose')}
						>
							{i18n('form__button-save-close')}
						</UiButton>
					) : null}
					{saveAndCreate ? (
						<UiButton
							variant={'outlined'}
							fullWidth
							startIcon={<ControlPointRoundedIcon />}
							disabled={!!disabled}
							onClick={() => clickHandle('saveAndCreate')}
						>
							{i18n('form__button-save-create')}
						</UiButton>
					) : null}
					{closeLink ? (
						<UiButton
							href={closeLink}
							variant={'outlined'}
							fullWidth
							startIcon={<HighlightOffRoundedIcon />}
						>
							{i18n('form__button-close')}
						</UiButton>
					) : null}
				</Owl>
			</Card>
		</Root>
	);
};
