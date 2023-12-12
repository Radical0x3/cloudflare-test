import Notiflix, { INotifyOptions } from 'notiflix';
import { RenderService } from 'Services/Render';

if (RenderService.IS_CSR) {
	Notiflix.Notify.init({
		position: 'right-bottom',
		clickToClose: true,
		pauseOnHover: false,
		fontSize: '16px',
		timeout: 10000,
		messageMaxLength: 500,
		borderRadius: '14px',
		success: {
			background: '#6FCA3A',
			textColor: '#ffffff',
			notiflixIconColor: '#ffffff',
			fontAwesomeIconColor: '#ffffff',
			backOverlayColor: '#3DAA17'
		},
		failure: {
			background: '#FF7271',
			textColor: '#ffffff',
			notiflixIconColor: '#ffffff',
			fontAwesomeIconColor: '#ffffff',
			backOverlayColor: '#E24544'
		}
	});
}

export const notify = (text: string, status: 'error' | 'success' = 'error', options: INotifyOptions = {}): void => {
	if (RenderService.IS_CSR) {
		if (status === 'success') {
			Notiflix.Notify.success(text, options);
		} else if (status === 'error') {
			Notiflix.Notify.failure(text, options);
		}
	}
};
