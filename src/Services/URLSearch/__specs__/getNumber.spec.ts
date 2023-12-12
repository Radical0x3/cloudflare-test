import { URLSearchService } from '../class';

describe('Метод должен вернуть число', () => {
	test('Из числового значения', () => {
		const search = new URLSearchService({ step: '5', size: '4.08', t: '-12.7' });
		expect(search.getNumber('step')).toEqual(5);
		expect(search.getNumber('size')).toEqual(4.08);
		expect(search.getNumber('t')).toEqual(-12.7);
	});

	test('Из массива числовых значений', () => {
		const search = new URLSearchService({ steps: ['5', '9', '11'], sizes: ['4.08', '7'], t: ['-12.7', '-20'] });
		expect(search.getNumber('steps')).toEqual(5);
		expect(search.getNumber('sizes')).toEqual(4.08);
		expect(search.getNumber('t')).toEqual(-12.7);
	});

	test('Из числового значения, но не меньше чем параметр `min`', () => {
		const search = new URLSearchService({ page: '-99' });
		const value = search.getNumber('page', 1);
		expect(value).toEqual(1);
	});

	test('Из массива числовых значений, но не меньше чем параметр `min`', () => {
		const search = new URLSearchService({ page: ['-99'] });
		const value = search.getNumber('page', 1);
		expect(value).toEqual(1);
	});

	test('Из числового значения, но не больше чем параметр `max`', () => {
		const search = new URLSearchService({ step: '99' });
		const value = search.getNumber('step', undefined, 50);
		expect(value).toEqual(50);
	});

	test('Из числового значения, но не больше чем параметр `max`', () => {
		const search = new URLSearchService({ step: ['99'] });
		const value = search.getNumber('step', undefined, 50);
		expect(value).toEqual(50);
	});
});

describe('Метод должен вернуть `null`', () => {
	test('Из несуществующего значения', () => {
		const search = new URLSearchService({});
		const value = search.getNumber('sizes');
		expect(value).toBeNull();
	});

	test('Из пустого строчного значения', () => {
		const search = new URLSearchService({ size: '' });
		const value = search.getNumber('size');
		expect(value).toBeNull();
	});

	test('Из пустого массива', () => {
		const search = new URLSearchService({ sizes: [] });
		const value = search.getNumber('sizes');
		expect(value).toBeNull();
	});

	test('Из массива не числовых значений', () => {
		const search = new URLSearchService({ sizes: ['M', 'L', 'XL'] });
		const value = search.getNumber('sizes');
		expect(value).toBeNull();
	});

	test('Из массива где все элементы - пустые строки', () => {
		const search = new URLSearchService({ sizes: ['', '', ''] });
		const value = search.getNumber('sizes');
		expect(value).toBeNull();
	});
});
