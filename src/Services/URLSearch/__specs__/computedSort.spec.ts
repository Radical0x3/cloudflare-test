import { URLSearchService } from '../class';

describe('Метод должен вычислить значение сортировки', () => {
	test("Из `{ sort: 'position-asc' }`", () => {
		const search = new URLSearchService({ sort: 'position-asc' });
		const sort = search.computedSort;
		expect(sort).toEqual('position-asc');
	});
	test("Из `{ sort: 'position-desc' }`", () => {
		const search = new URLSearchService({ sort: 'position-desc' });
		const sort = search.computedSort;
		expect(sort).toEqual('position-desc');
	});
	test('Из массива значений', () => {
		const search = new URLSearchService({ sort: ['name-asc', 'position-desc'] });
		const sort = search.computedSort;
		expect(sort).toEqual('name-asc');
	});
	test('Из массива значений, игнорируя первые пустые элементы массива', () => {
		const search = new URLSearchService({ sort: ['', '', 'name-asc', 'position-desc'] });
		const sort = search.computedSort;
		expect(sort).toEqual('name-asc');
	});
});

describe('Метод должен вычислить `null`', () => {
	test('Из несуществующего значения', () => {
		const search = new URLSearchService({ page: '1' });
		const sort = search.computedSort;
		expect(sort).toBeNull();
	});
	test('Из не корректного значения сортировки', () => {
		const search = new URLSearchService({ sort: 'position' });
		const sort = search.computedSort;
		expect(sort).toBeNull();
	});
	test('Из массива значений, если все элементы это пустые строки', () => {
		const search = new URLSearchService({ sort: ['', '', ''] });
		const sort = search.computedSort;
		expect(sort).toBeNull();
	});
});
