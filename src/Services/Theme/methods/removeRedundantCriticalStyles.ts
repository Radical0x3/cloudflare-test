/**
 * @param css Стили всегда приходят "сжатые" без лишнего форматирования
 */
export function removeRedundantCriticalStyles(css: string): string {
	return (
		css
			// @media print
			// -------------
			// блоки медиа запросов
			.replace(/@media print(\s([^{]+))?{((?<!(}})).)+}}/gi, '')
			// -------------
			// @media (hover: none)
			// -------------
			// блоки медиа запросов
			.replace(/@media \(hover:\s?none\){((?<!(}})).)+}}/gi, '')
			// -------------
			// :hover, :active, :focus, :focus-visible, ::backdrop
			// -------------
			// одиночные блоки `y{css}x:hover{css}z{css}` => `y{css},z{css}`
			.replace(/(?<=[}{]|^)([^},{]*):(hover|active|focus(-visible)?|:backdrop)([+~> :][^,{]+)?{[^}]+}/gi, '')
			// чистые селекторы в перечислениях (середина и конец списка) `xx,xx:hover,yy,yy:hover{css}` => `xx,yy{css}`
			.replace(/(,)([^},]*):(hover|active|focus(-visible)?|:backdrop)([+~> :][^,{]+)?/gi, '')
			// чистые селекторы в перечислениях (начало списка) `xx:hover,yy{css}` => `yy{css}`
			.replace(/((?<=[}{]|^))([^},{]*):(hover|active|focus(-visible)?|:backdrop)([+~> :][^,{]+)?,/gi, '')
	);
}
