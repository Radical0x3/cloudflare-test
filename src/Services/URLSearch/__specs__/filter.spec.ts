import { URLSearchService } from '../class';

describe('Метод должен отфильтровать параметры', () => {
	test('Откинуть `page` если равен 1', () => {
		const search = new URLSearchService({ page: '1', size: ['xl'] });
		expect(search.toString()).toEqual('?page=1&size=xl');
		search.filter(({ name, value }) => {
			if (name === 'page' && value === '1') {
				return false;
			}
			return true;
		});
		expect(search.toString()).toEqual('?size=xl');
	});
	test('Оставить только нужные параметры', () => {
		const search = new URLSearchService({ page: '1', size: 'xl', lorem: 'ipsum', blabla: 'blabla', xxx: 'yyy' });
		const publicParams = ['size'];
		search.filter((item) => publicParams.includes(item.name));
		expect(search.toString()).toEqual('?size=xl');
	});
});
