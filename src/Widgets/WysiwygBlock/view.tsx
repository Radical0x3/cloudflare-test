import { FC } from 'react';
import { Root, classes } from './styled';
import { WysiwygBlockProps } from './types';
import { UiContainer } from 'UI/Container';
import { Wysiwyg } from 'Components/Wysiwyg';

export const WysiwygBlock: FC<WysiwygBlockProps> = ({ data }) => {
	return data ? (
		<Root>
			<UiContainer>
				<div className={classes.container}>
					<Wysiwyg data={data} />
				</div>
			</UiContainer>
		</Root>
	) : null;
};
