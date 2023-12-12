/**
 * Пример использования:
 * ```tsx
 * items.map((item, i) => <Card key={RenderService.key(item.id, i)} />)
 * ```
 */
export const key = (...args: (string | number | boolean)[]): string => args.join('::');
