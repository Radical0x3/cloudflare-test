export const formatDigits = (number: number, decimals = 0, decPoint = '.', thousandsSep = ' '): string | number => {
	const str = number.toFixed(decimals).toString().split('.');
	const parts = [];
	for (let i = str[0].length; i > 0; i -= 3) {
		parts.unshift(str[0].substring(Math.max(0, i - 3), i));
	}
	str[0] = parts.join(thousandsSep);
	return str.join(decPoint);
};
