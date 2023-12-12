import { URLSearchService } from '../class';

describe('Метод должен задавать массив значений', () => {
	test('Создать новый массив', () => {
		const search = new URLSearchService();
		expect(search.getString('size')).toBeNull();
		search.setValues('size', ['1', '2']);
		expect(search.getAllStrings('size')).toEqual(['1', '2']);
	});

	test('Перезаписать предыдущий массив на новый', () => {
		const search = new URLSearchService({ size: ['1', '2'] });
		expect(search.getAllStrings('size')).toEqual(['1', '2']);
		search.setValues('size', ['3', '5']);
		expect(search.getAllStrings('size')).toEqual(['3', '5']);
	});
});
