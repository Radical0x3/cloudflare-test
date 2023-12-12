import { StylisElement, StylisPlugin } from '@emotion/cache';
import { PlainObject } from 'Interfaces/PlainObject';
import { combine, copy, DECLARATION, KEYFRAMES, match, MOZ, MS, replace, RULESET, serialize, WEBKIT } from 'stylis';
import prefix from './prefix';

declare module 'stylis' {
	export function copy(root: StylisElement, props: PlainObject): StylisElement;
}

const prefixer: StylisPlugin = (element, index, children, callback) => {
	if (element && element.length > -1) {
		if (!element.return) {
			switch (element.type) {
				case DECLARATION:
					element.return = prefix(element.value, element.length);
					break;
				case KEYFRAMES:
					// eslint-disable-next-line @typescript-eslint/no-unsafe-return
					return serialize([copy(element, { value: replace(element.value, '@', '@' + WEBKIT) })], callback);
				case RULESET:
					if (element.length) {
						// eslint-disable-next-line @typescript-eslint/no-unsafe-return
						return combine(
							Array.isArray(element.props) ? element.props : [element.props],
							function (value) {
								switch (match(value, /(::plac\w+|:read-\w+)/)) {
									// :read-(only|write)
									case ':read-only':
									case ':read-write':
										// eslint-disable-next-line @typescript-eslint/no-unsafe-return
										return serialize(
											[
												copy(element, {
													props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
												})
											],
											callback
										);
									// :placeholder
									case '::placeholder':
										// eslint-disable-next-line @typescript-eslint/no-unsafe-return
										return serialize(
											[
												copy(element, {
													props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
												}),
												copy(element, {
													props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
												}),
												copy(element, {
													props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
												})
											],
											callback
										);
								}

								return '';
							}
						);
					}
			}
		}
	}
};

export { prefixer as default };
