export const scrollToElement = (selector?: string): void => {
	const element = selector ? window.document.querySelector(selector) : null;
	const elementTop = element ? element.getBoundingClientRect().top : -window.pageYOffset;
	const header = window.document.querySelector('#header');
	const headerHeight = header ? header.getBoundingClientRect().height : 0;

	window.scrollTo({
		top: elementTop ? window.pageYOffset + elementTop - (elementTop < 0 ? headerHeight : 0) : 0,
		behavior: 'smooth'
	});
};
