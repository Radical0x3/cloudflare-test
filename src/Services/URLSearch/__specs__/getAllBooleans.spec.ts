import { URLSearchService } from '../class';

describe('Метод должен вернуть массив логических значений', () => {
	test('Из строчных значений, которые принято считать логическим TRUE', () => {
		const search = new URLSearchService({ flag: '1', checked: 'true', volume: 'on' });
		expect(search.getAllBooleans('flag')).toEqual([true]);
		expect(search.getAllBooleans('checked')).toEqual([true]);
		expect(search.getAllBooleans('volume')).toEqual([true]);
	});

	test('Из любых других строчных значений массив `false` элементов', () => {
		const search = new URLSearchService({ flag: 'UK', checked: 'false', age: '34', volume: '0' });
		expect(search.getAllBooleans('flag')).toEqual([false]);
		expect(search.getAllBooleans('checked')).toEqual([false]);
		expect(search.getAllBooleans('age')).toEqual([false]);
		expect(search.getAllBooleans('volume')).toEqual([false]);
	});

	test('Из массива строчных значений, которые принято считать логическим TRUE', () => {
		const search = new URLSearchService({ flags: ['1', 'true', 'on'] });
		const value = search.getAllBooleans('flags');
		expect(value).toEqual([true, true, true]);
	});

	test('Из массива строчных значений, которые принято считать логическим TRUE и отфильтровав пустые значения', () => {
		const search = new URLSearchService({ flags: ['1', '', 'true', '', 'on'] });
		const value = search.getAllBooleans('flags');
		expect(value).toEqual([true, true, true]);
	});

	test('Из массива любых других строчных значений будет массив `false` элементов', () => {
		const search = new URLSearchService({ flags: ['bla-bla', 'off', '0', 'false'] });
		const value = search.getAllBooleans('flags');
		expect(value).toEqual([false, false, false, false]);
	});
});

describe('Метод должен вернуть пустой массив', () => {
	test('Из пустого массива', () => {
		const search = new URLSearchService({ sizes: [] });
		const value = search.getAllBooleans('sizes');
		expect(value).toEqual([]);
	});

	test('Из массива пустых строк', () => {
		const search = new URLSearchService({ sizes: ['', '', ''] });
		const value = search.getAllBooleans('sizes');
		expect(value).toEqual([]);
	});

	test('Из пустого строчного значения', () => {
		const search = new URLSearchService({ sizes: '' });
		const value = search.getAllBooleans('sizes');
		expect(value).toEqual([]);
	});
});

describe('Метод должен вернуть `null`', () => {
	test('Из несуществующего значения', () => {
		const search = new URLSearchService({});
		const value = search.getAllBooleans('sizes');
		expect(value).toBeNull();
	});

	test('Из пустого массива, если указан параметр игнорирования пустого массива', () => {
		const search = new URLSearchService({ sizes: [] });
		const value = search.getAllBooleans('sizes', true);
		expect(value).toBeNull();
	});

	test('Из массива пустых строк, если указан параметр игнорирования пустого массива', () => {
		const search = new URLSearchService({ sizes: ['', ''] });
		const value = search.getAllBooleans('sizes', true);
		expect(value).toBeNull();
	});

	test('Из пустого строчного значения, если указан параметр игнорирования пустого массива', () => {
		const search = new URLSearchService({ sizes: '' });
		const value = search.getAllBooleans('sizes', true);
		expect(value).toBeNull();
	});
});
