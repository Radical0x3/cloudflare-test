import React, { ReactNode } from 'react';
import { crossKeyboardValues } from './crossKeyboardValues';
import { UtilService } from 'Services/Util';

export function splitToHighlightElements(origin?: string | null, filter?: string | null): ReactNode {
	if (UtilService.guards.isNotEmptyString(origin) && UtilService.guards.isNotEmptyString(filter)) {
		const match = crossKeyboardValues(filter).find((part) => origin.toLowerCase().includes(part.toLowerCase()));
		if (match) {
			const regex = new RegExp(match, 'gi');
			const parts: ReactNode[] = [];
			let result: RegExpExecArray | null;
			let lastIndex = 0;
			let key = 0;
			while ((result = regex.exec(origin)) !== null) {
				if (lastIndex !== result.index) {
					parts.push(<span key={key++}>{origin.slice(lastIndex, result.index)}</span>);
				}
				parts.push(<mark key={key++}>{result[0]}</mark>);
				lastIndex = regex.lastIndex;
			}
			if (lastIndex !== origin.length) {
				parts.push(<span key={key++}>{origin.slice(lastIndex, origin.length)}</span>);
			}
			return parts;
		}
	}
	return origin;
}
