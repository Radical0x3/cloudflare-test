import { Theme, ThemeBreakpoint, ThemeMqOrientation } from '../themes/types';

type MQValue = ThemeBreakpoint | ThemeMqOrientation | number;

interface MQ {
	value: MQValue;
	dir?: 'min' | 'max';
	dimension?: 'width' | 'height';
}

export const media = (theme: Theme, ...queries: MQ[] | MQValue[]): string => {
	const values = queries
		.map((mq): MQ => (typeof mq === 'string' || typeof mq === 'number' ? { value: mq } : mq))
		.map(({ value, dir = 'min', dimension = 'width' }) => {
			if (value === 'landscape' || value === 'portrait') {
				return `(orientation: ${value})`;
			} else {
				const v = typeof value === 'number' ? `${value}px` : theme.breakpoints.values[value];
				return `(${dir}-${dimension}: ${v})`;
			}
		});
	return `@media ${values.join(' and ')}`;
};
