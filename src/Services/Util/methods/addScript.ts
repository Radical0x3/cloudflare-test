export const addScript = (src: string, id: string): Promise<void> => {
	return new Promise((resolve) => {
		if (window !== undefined) {
			const el = window.document.getElementById(id);
			if (src && !el) {
				const script = window.document.createElement('script');
				script.id = id;
				script.src = src;
				script.defer = true;
				script.onload = () => {
					resolve();
				};
				script.onerror = () => {
					resolve();
				};
				window.document.body.appendChild(script);
			} else {
				resolve();
			}
		} else {
			resolve();
		}
	});
};
