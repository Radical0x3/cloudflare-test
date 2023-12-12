export const devConsole = {
	log(...args: any[]): void {
		if (process.env.NEXT_PUBLIC_ENABLE_DEV_TOOLS) {
			console.log(...args);
		}
	},
	warn(...args: any[]): void {
		if (process.env.NEXT_PUBLIC_ENABLE_DEV_TOOLS) {
			console.warn(...args);
		}
	},
	error(...args: any[]): void {
		if (process.env.NEXT_PUBLIC_ENABLE_DEV_TOOLS) {
			console.error(...args);
		}
	},
	time(label?: string): void {
		if (process.env.NEXT_PUBLIC_ENABLE_DEV_TOOLS) {
			console.time(label);
		}
	},
	timeEnd(label?: string): void {
		if (process.env.NEXT_PUBLIC_ENABLE_DEV_TOOLS) {
			console.timeEnd(label);
		}
	},
	none(...args: any[]): void {
		return undefined;
	}
};
