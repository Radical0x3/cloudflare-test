import { PlainObject } from 'Interfaces/PlainObject';

export const downloadJson = (data: PlainObject): void => {
	const string = JSON.stringify(data, undefined, '  ');
	const json = `data:text/json;charset=utf-8,${window.encodeURIComponent(string)}`;
	const anchor = document.createElement('a');
	const date = new Date();
	anchor.setAttribute('href', json);
	anchor.setAttribute('download', `translations-${date.toISOString()}.json`);
	document.body.appendChild(anchor);
	anchor.click();
	anchor.remove();
};
