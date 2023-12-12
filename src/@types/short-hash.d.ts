/// <reference types="short-hash" />

declare module 'short-hash' {
	export default function shortHash<T>(str: T): T {
		return str;
	}
}
