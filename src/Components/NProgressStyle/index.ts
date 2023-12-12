import NProgress from 'nprogress';

interface Options {
	shallow?: boolean;
	locale?: string | false;
	scroll?: boolean;
}

NProgress.configure({ showSpinner: false });

export { NProgressStyle } from './view';

export const nProgressStart = (url: string, options: Options = {}): void => {
	!options.shallow && NProgress.start();
};

export const nProgressEnd = (url: string, options: Options = {}): void => {
	!options.shallow && NProgress.done();
};
