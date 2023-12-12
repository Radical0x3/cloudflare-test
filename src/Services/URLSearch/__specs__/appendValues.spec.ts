import { URLSearchService } from '../class';

describe('Метод должен добавлять массив значений', () => {
	test('Добавлять в конец предыдущего значения массив', () => {
		const search = new URLSearchService({ size: ['1', '2'] });
		expect(search.getAllStrings('size')).toEqual(['1', '2']);
		search.appendValues('size', ['3', '5']);
		expect(search.getAllStrings('size')).toEqual(['1', '2', '3', '5']);
	});

	test('Создать новый массив, если параметра не было', () => {
		const search = new URLSearchService();
		expect(search.getString('size')).toBeNull();
		search.appendValues('size', ['1', '2']);
		expect(search.getAllStrings('size')).toEqual(['1', '2']);
	});
});
