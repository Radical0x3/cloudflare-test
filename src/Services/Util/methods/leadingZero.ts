/**
 * @examples
 * leadingZero(7) // '07'
 * leadingZero(12) // '12'
 * leadingZero(12, 4) // '0012'
 */
export const leadingZero = (number: number | string, qty = 2): string => {
	if (typeof number === 'number') {
		number = String(number);
	}
	const diff = qty - number.length;
	const leading = diff < 0 ? '' : new Array(diff).fill('0').join('');
	return leading + number;
};
