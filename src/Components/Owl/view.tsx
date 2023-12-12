import { FC, createElement } from 'react';
import clsx from 'clsx';
import { styled } from 'Services/Theme';
import { Props } from './types';

const Root: FC<Props> = ({ className, component = 'div', spacing = 0, ...props }) => {
	return createElement(component, {
		...props,
		className: clsx(className, !!spacing && `s${spacing}`)
	});
};

export const Owl = styled(Root)`
	& > * + * {
		--owl-s: 0px;
		margin-top: var(--owl-s) !important;
	}

	&.s1 > * + * {
		--owl-s: ${(p) => p.theme.spacing(1)};
	}

	&.s2 > * + * {
		--owl-s: ${(p) => p.theme.spacing(2)};
	}

	&.s3 > * + * {
		--owl-s: ${(p) => p.theme.spacing(3)};
	}

	&.s4 > * + * {
		--owl-s: ${(p) => p.theme.spacing(4)};
	}

	&.s5 > * + * {
		--owl-s: ${(p) => p.theme.spacing(5)};
	}

	&.s6 > * + * {
		--owl-s: ${(p) => p.theme.spacing(6)};
	}

	&.s7 > * + * {
		--owl-s: ${(p) => p.theme.spacing(7)};
	}

	&.s8 > * + * {
		--owl-s: ${(p) => p.theme.spacing(8)};
	}

	&.s9 > * + * {
		--owl-s: ${(p) => p.theme.spacing(9)};
	}
`;
