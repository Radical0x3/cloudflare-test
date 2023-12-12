import { FC, useEffect, useState } from 'react';
import { breakpointValues } from 'Services/Theme';
import { UiHiddenProps } from './types';
import { RenderService } from 'Services/Render';

export const UiHidden: FC<UiHiddenProps> = ({ children, minWidth, maxWidth, minHeight, maxHeight }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const checkShow = (): void => {
			if (RenderService.IS_CSR) {
				if (minWidth !== undefined) {
					if (window.innerWidth >= breakpointValues[minWidth]) {
						setShow(false);
					} else {
						setShow(true);
					}
				}

				if (maxWidth !== undefined) {
					if (window.innerWidth <= breakpointValues[maxWidth]) {
						setShow(false);
					} else {
						setShow(true);
					}
				}

				if (minHeight !== undefined) {
					if (window.innerHeight >= breakpointValues[minHeight]) {
						setShow(false);
					} else {
						setShow(true);
					}
				}

				if (maxHeight !== undefined) {
					if (window.innerHeight <= breakpointValues[maxHeight] - 1) {
						setShow(false);
					} else {
						setShow(true);
					}
				}
			}
		};

		if (RenderService.IS_CSR) {
			window.addEventListener('resize', checkShow);
			window.addEventListener('orientationchange', checkShow);
			checkShow();
		}

		return () => {
			if (RenderService.IS_CSR) {
				window.removeEventListener('resize', checkShow);
				window.removeEventListener('orientationchange', checkShow);
			}
		};
	}, [setShow, minWidth, maxWidth, minHeight, maxHeight]);

	return <>{show ? children : null}</>;
};
