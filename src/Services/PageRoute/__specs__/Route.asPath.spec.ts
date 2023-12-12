import { PageRoute } from '../class';

describe('By default `asPath` === `pathname`', () => {
	test('Default pathname', () => {
		const route = new PageRoute();
		expect(route.pathname).toStrictEqual('/');
	});

	['/', '/news', '/xxx/[slug]'].forEach((pathname, i) => {
		test(`pathname: "${pathname}"`, () => {
			const route = new PageRoute({ pathname });
			expect(route.asPath()).toStrictEqual(route.pathname);
		});
	});
});
