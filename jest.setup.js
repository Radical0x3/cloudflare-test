require('./libs/environment/load')(true);

// Валим тесты на "эррор" сообщениях
console.error = (message) => {
	throw new Error(message);
};
