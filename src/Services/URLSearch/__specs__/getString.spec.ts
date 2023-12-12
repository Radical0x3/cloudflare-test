import { URLSearchService } from '../class';

describe('Метод должен вернуть строку', () => {
	test('Из строчного значения', () => {
		const search = new URLSearchService({ name: 'Lorem' });
		const value = search.getString('name');
		expect(value).toEqual('Lorem');
	});

	test('Из строчного значения, даже если оно пустое', () => {
		const search = new URLSearchService({ name: '' });
		const value = search.getString('name');
		expect(value).toEqual('');
	});

	test('Из массива строк - первый элемент', () => {
		const search = new URLSearchService({ sizes: ['M', 'L', 'XL'] });
		const value = search.getString('sizes');
		expect(value).toEqual('M');
	});

	test('Из массива строк - первый элемент, даже если он пустой', () => {
		const search = new URLSearchService({ sizes: ['', 'M', 'L', 'XL'] });
		const value = search.getString('sizes');
		expect(value).toEqual('');
	});

	test('Из массива строк - первый НЕ пустой элемент, если указан параметр игнорирования пустых строк', () => {
		const search = new URLSearchService({ sizes: ['', '', 'L', 'XL'] });
		const value = search.getString('sizes', true);
		expect(value).toEqual('L');
	});
});

describe('Метод должен вернуть `null`', () => {
	test('Из несуществующего значения', () => {
		const search = new URLSearchService({});
		const value = search.getString('name');
		expect(value).toBeNull();
	});

	test('Из пустого строчного значения, если указан параметр игнорирования пустых строк', () => {
		const search = new URLSearchService({ name: '' });
		const value = search.getString('name', true);
		expect(value).toBeNull();
	});

	test('Из пустого массива', () => {
		const search = new URLSearchService({ sizes: [] });
		const value = search.getString('sizes');
		expect(value).toBeNull();
	});

	test('Из массива строк, если все элементы массива - это пустые строки и указан параметр игнорирования пустых строк', () => {
		const search = new URLSearchService({ sizes: ['', ''] });
		const value = search.getString('sizes', true);
		expect(value).toBeNull();
	});
});
