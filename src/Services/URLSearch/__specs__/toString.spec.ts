import { URLSearchService } from '../class';

describe('Метод должен корректно приводит к строке весь экземпляр', () => {
	test('Из объекта `ParsedUrlQuery`', () => {
		const search = new URLSearchService({ flag: '1', sizes: ['l', 'xl'] });
		const string = search.toString();
		expect(string).toEqual('?flag=1&sizes=l&sizes=xl');
	});
	test('Из объекта `URLSearchParams`', () => {
		const search = new URLSearchService(new URLSearchParams('?flag=1&sizes=l&sizes=xl'));
		const string = search.toString();
		expect(string).toEqual('?flag=1&sizes=l&sizes=xl');
	});
	test('Из строки GET-параметров `?flag=1&sizes=l&sizes=xl`', () => {
		const search = new URLSearchService('?flag=1&sizes=l&sizes=xl');
		const string = search.toString();
		expect(string).toEqual('?flag=1&sizes=l&sizes=xl');
	});
});

describe('Метод должен возвращать пустую строку', () => {
	test('Из пустого объекта параметров', () => {
		const search = new URLSearchService();
		const string = search.toString();
		expect(string).toEqual('');
	});
});
