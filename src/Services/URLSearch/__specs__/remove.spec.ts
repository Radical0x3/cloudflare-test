import { URLSearchService } from '../class';

test('Метод должен удалять параметр', () => {
	const search = new URLSearchService({ size: ['1', '2'] });
	expect(search.getAllStrings('size')).toEqual(['1', '2']);
	search.remove('size');
	expect(search.getAllStrings('size')).toBeNull();
});
