import { FC } from 'react';
import { Root } from './styled';
import { WysiwygProps } from './types';

export const Wysiwyg: FC<WysiwygProps> = ({ data }) => {
	return (
		<Root
			dangerouslySetInnerHTML={{
				__html: (data || '')
					.replace(/<img([^>]*)loading="lazy"/g, `<img$1`)
					.replace(/<img/g, `<img loading="lazy"`)
			}}
		/>
	);
};
