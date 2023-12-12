import { URLSearchService } from '../class';

describe('Метод должен задавать значение', () => {
	test('Создать новое', () => {
		const search = new URLSearchService();
		expect(search.getString('size')).toBeNull();
		search.setValue('size', 'xl');
		expect(search.getString('size')).toEqual('xl');
	});
	test('Перезаписать предыдущее на новое', () => {
		const search = new URLSearchService({ size: 'xl' });
		expect(search.getString('size')).toEqual('xl');
		search.setValue('size', 'sm');
		expect(search.getString('size')).toEqual('sm');
	});
});
