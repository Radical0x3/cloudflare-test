import { URLSearchService } from '../class';

describe('Метод должен вернуть массив чисел', () => {
	test('Из массива строчных чисел', () => {
		const search = new URLSearchService({ sizes: ['4', '7', '9'] });
		const value = search.getAllNumbers('sizes');
		expect(value).toEqual([4, 7, 9]);
	});

	test('Из массива строчных чисел, отфильтровав пустые значения', () => {
		const search = new URLSearchService({ sizes: ['4', '', '5', ''] });
		const value = search.getAllNumbers('sizes');
		expect(value).toEqual([4, 5]);
	});

	test('Из строчного значения', () => {
		const search = new URLSearchService({ size: '4' });
		const value = search.getAllNumbers('size');
		expect(value).toEqual([4]);
	});

	test('Из строчного значения, но не меньше чем параметр `min`', () => {
		const search = new URLSearchService({ size: '4' });
		const value = search.getAllNumbers('size', 6);
		expect(value).toEqual([6]);
	});

	test('Из массива строчных чисел, но не меньше чем параметр `min` каждый', () => {
		const search = new URLSearchService({ sizes: ['-99', '0', '3', '5'] });
		const value = search.getAllNumbers('sizes', 2);
		expect(value).toEqual([2, 2, 3, 5]);
	});

	test('Из строчного значения, но не больше чем параметр `max`', () => {
		const search = new URLSearchService({ size: '4' });
		const value = search.getAllNumbers('size', undefined, 2);
		expect(value).toEqual([2]);
	});

	test('Из числового строчных чисел, но не больше чем параметр `max` каждый', () => {
		const search = new URLSearchService({ sizes: ['-99', '0', '3', '5'] });
		const value = search.getAllNumbers('sizes', undefined, 2);
		expect(value).toEqual([-99, 0, 2, 2]);
	});
});

describe('Метод должен вернуть пустой массив', () => {
	test('Из пустого массива', () => {
		const search = new URLSearchService({ sizes: [] });
		const value = search.getAllNumbers('sizes');
		expect(value).toEqual([]);
	});

	test('Из массива пустых строк', () => {
		const search = new URLSearchService({ sizes: ['', '', ''] });
		const value = search.getAllNumbers('sizes');
		expect(value).toEqual([]);
	});

	test('Из пустого строчного значения', () => {
		const search = new URLSearchService({ sizes: '' });
		const value = search.getAllNumbers('sizes');
		expect(value).toEqual([]);
	});
});

describe('Метод должен вернуть `null`', () => {
	test('Из несуществующего значения', () => {
		const search = new URLSearchService({});
		const value = search.getAllNumbers('sizes');
		expect(value).toBeNull();
	});

	test('Из пустого массива, если указан параметр игнорирования пустого массива', () => {
		const search = new URLSearchService({ sizes: [] });
		const value = search.getAllNumbers('sizes', undefined, undefined, true);
		expect(value).toBeNull();
	});

	test('Из массива пустых строк, если указан параметр игнорирования пустого массива', () => {
		const search = new URLSearchService({ sizes: ['', ''] });
		const value = search.getAllNumbers('sizes', undefined, undefined, true);
		expect(value).toBeNull();
	});

	test('Из пустого строчного значения, если указан параметр игнорирования пустого массива', () => {
		const search = new URLSearchService({ sizes: '' });
		const value = search.getAllNumbers('sizes', undefined, undefined, true);
		expect(value).toBeNull();
	});
});
