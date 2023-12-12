import { charat, hash, indexof, MOZ, replace, strlen, WEBKIT } from 'stylis';

/* eslint-disable no-fallthrough */

export default function prefix(value: string, length: number): string {
	if (value.startsWith('--')) {
		return value;
	}
	switch (hash(value, length)) {
		// color-adjust
		case 5103:
			return WEBKIT + 'print-' + value + value;
		// clip-path, backface-visibility
		case 5844:
		case 3191:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		// user-select, hyphens
		case 4246:
		case 6968:
			return WEBKIT + value + value;
		// appearance
		case 5349:
			return WEBKIT + value + MOZ + value + value;
		// background, background-image
		case 5495:
		case 3959:
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
		// (min|max)?(inline-size|block-size)
		case 5753:
		case 5535:
		case 4933:
		case 4677:
		case 5021:
		case 4765:
			// stretch
			if (strlen(value) - 1 - length > 6 && charat(value, length + 1) === 115) {
				return ~indexof(value, 'stretch')
					? prefix(replace(value, 'stretch', WEBKIT + 'fill-available'), length) + value
					: value;
			}
			break;
	}

	return value;
}
