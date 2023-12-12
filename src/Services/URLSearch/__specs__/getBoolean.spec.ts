import { URLSearchService } from '../class';

describe('Метод должен вернуть логическое значение', () => {
	test('Из строчных значений, которые принято считать логическим TRUE', () => {
		const search = new URLSearchService({ flag: '1', checked: 'true', volume: 'on' });
		expect(search.getBoolean('flag')).toEqual(true);
		expect(search.getBoolean('checked')).toEqual(true);
		expect(search.getBoolean('volume')).toEqual(true);
	});

	test('Из любых других строчных значений массив `false` элементов', () => {
		const search = new URLSearchService({ flag: 'UK', checked: 'false', age: '34', volume: '0' });
		expect(search.getBoolean('flag')).toEqual(false);
		expect(search.getBoolean('checked')).toEqual(false);
		expect(search.getBoolean('age')).toEqual(false);
		expect(search.getBoolean('volume')).toEqual(false);
	});

	test('Из массива строчных значений, которые принято считать логическим TRUE', () => {
		const search = new URLSearchService({ flags: ['1', 'true', 'on'] });
		const value = search.getBoolean('flags');
		expect(value).toEqual(true);
	});

	test('Из массива строчных значений, которые принято считать логическим TRUE и отфильтровав пустые значения', () => {
		const search = new URLSearchService({ flags: ['', '1', 'true', 'on'] });
		const value = search.getBoolean('flags');
		expect(value).toEqual(true);
	});

	test('Из массива любых других строчных значений будет массив `false` элементов', () => {
		const search = new URLSearchService({ flags: ['bla-bla', 'off', '0', 'false'] });
		const value = search.getBoolean('flags');
		expect(value).toEqual(false);
	});
});

describe('Метод должен вернуть `null`', () => {
	test('Из несуществующего значения', () => {
		const search = new URLSearchService({});
		const value = search.getBoolean('sizes');
		expect(value).toBeNull();
	});

	test('Из пустого строчного значения', () => {
		const search = new URLSearchService({ size: '' });
		const value = search.getBoolean('size');
		expect(value).toBeNull();
	});

	test('Из пустого массива', () => {
		const search = new URLSearchService({ sizes: [] });
		const value = search.getBoolean('sizes');
		expect(value).toBeNull();
	});

	test('Из массива где все элементы - пустые строки', () => {
		const search = new URLSearchService({ sizes: ['', '', ''] });
		const value = search.getBoolean('sizes');
		expect(value).toBeNull();
	});
});
