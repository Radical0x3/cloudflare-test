import { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import clsx from 'clsx';
import { DataService } from 'Services/Data';
import { UiTabs } from 'UI/Tabs';
import { UiTab } from 'UI/Tab';
import { TranslationsTabsProps } from './types';
import { Root, classes } from './styled';
import { transformTranslations } from './utils';

export const TranslationsTabs: FC<TranslationsTabsProps> = ({ name, names = [], children }) => {
	const { getValues } = useFormContext();
	const [tabValue, setTabValue] = useState<number>(0);
	const { register, formState } = useFormContext();
	const translationName = name || 'translations';

	const translations = transformTranslations(getValues(translationName));

	return (
		<Root>
			<UiTabs
				value={tabValue}
				onChange={(event, newValue) => {
					setTabValue(newValue);
				}}
				variant={'scrollable'}
				scrollButtons={'auto'}
			>
				{translations.map((data, index) => {
					const hasError = names.length
						? !!names.find(
								(item) =>
									DataService.getIn(formState.errors, `${translationName}.${index}.${item}`) != null
						  )
						: DataService.getIn(formState.errors, `${translationName}.${index}`) != null;

					return (
						<UiTab
							label={data.language.toUpperCase()}
							key={index}
							value={index}
							icon={hasError ? <ReportProblemRoundedIcon /> : undefined}
							iconPosition={'start'}
							className={clsx(classes.tab, {
								[classes.tabError]: hasError && index === tabValue ? 'error.main !important' : undefined
							})}
						/>
					);
				})}
			</UiTabs>
			{translations.map((data, index) => (
				<div
					className={clsx(classes.container, {
						[classes.containerActive]: index === tabValue
					})}
					key={index}
				>
					<input type="hidden" value={data.language} {...register(`${translationName}.${index}.language`)} />
					{typeof children === 'function' && children(`${translationName}.${index}`, index, data)}
				</div>
			))}
		</Root>
	);
};
