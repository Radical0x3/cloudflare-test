export const num2str = (number: number, texts: string[] = []): string => {
	number = Math.abs(number) % 100;
	const num = number % 10;
	if (number > 10 && number < 20) {
		return texts[2];
	}
	if (num > 1 && num < 5) {
		return texts[1];
	}
	if (num === 1) {
		return texts[0];
	}
	return texts[2];
};
