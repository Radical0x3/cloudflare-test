import { cloneJSON } from '../cloneJSON';

describe('Function signature should match specification', () => {
	test('Object should not be same', () => {
		const sample = {
			key: 'value',
			inner: {
				key: 'value'
			}
		};
		const cloned = cloneJSON(sample);
		expect(sample).toEqual(cloned);
		expect(sample === cloned).toBeFalsy();
		expect(sample.inner === cloned.inner).toBeFalsy();
	});
});
