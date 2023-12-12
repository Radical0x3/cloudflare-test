import { URLSearchService } from '../class';

describe('Метод должен вернуть массив строк', () => {
	test('Из массива строк', () => {
		const search = new URLSearchService({ sizes: ['M', 'L', 'XL'] });
		const value = search.getAllStrings('sizes');
		expect(value).toEqual(['M', 'L', 'XL']);
	});

	test('Из массива строк c пустыми значениями', () => {
		const search = new URLSearchService({ sizes: ['M', '', 'XL', ''] });
		const value = search.getAllStrings('sizes');
		expect(value).toEqual(['M', '', 'XL', '']);
	});

	test('Из массива строк, отфильтровав пустые значения, если указан параметр игнорирования пустых строк ', () => {
		const search = new URLSearchService({ sizes: ['M', '', 'XL', ''] });
		const value = search.getAllStrings('sizes', true);
		expect(value).toEqual(['M', 'XL']);
	});

	test('Из строчного значения', () => {
		const search = new URLSearchService({ name: 'Lorem' });
		const value = search.getAllStrings('name');
		expect(value).toEqual(['Lorem']);
	});

	test('Из строчного значения, даже если оно пустое', () => {
		const search = new URLSearchService({ name: '' });
		const value = search.getAllStrings('name');
		expect(value).toEqual(['']);
	});
});

describe('Метод должен вернуть пустой массив', () => {
	test('Из пустого массива', () => {
		const search = new URLSearchService({ sizes: [] });
		const value = search.getAllStrings('sizes');
		expect(value).toEqual([]);
	});

	test('Из массива пустых строк, если указан параметр игнорирования пустых строк', () => {
		const search = new URLSearchService({ sizes: ['', '', ''] });
		const value = search.getAllStrings('sizes', true);
		expect(value).toEqual([]);
	});

	test('Из пустого строчного значения, если указан параметр игнорирования пустых строк', () => {
		const search = new URLSearchService({ sizes: '' });
		const value = search.getAllStrings('sizes', true);
		expect(value).toEqual([]);
	});
});

describe('Метод должен вернуть `null`', () => {
	test('Из несуществующего значения', () => {
		const search = new URLSearchService({});
		const value = search.getAllStrings('sizes');
		expect(value).toBeNull();
	});

	test('Из пустого массива, если указан параметр игнорирования пустого массива', () => {
		const search = new URLSearchService({ sizes: [] });
		const value = search.getAllStrings('sizes', undefined, true);
		expect(value).toBeNull();
	});

	test('Из массива пустых строк, если указаны параметры игнорирования пустых строк и игнорирования пустого массива', () => {
		const search = new URLSearchService({ sizes: ['', ''] });
		const value = search.getAllStrings('sizes', true, true);
		expect(value).toBeNull();
	});

	test('Из пустого строчного значения, если указаны параметры игнорирования пустых строк и игнорирования пустого массива', () => {
		const search = new URLSearchService({ sizes: '' });
		const value = search.getAllStrings('sizes', true, true);
		expect(value).toBeNull();
	});
});
