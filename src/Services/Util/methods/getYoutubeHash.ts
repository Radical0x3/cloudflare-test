export function getYoutubeHash(link?: string | null): string {
	return link ? link.replace(/^.*youtube.com\/watch\?v=([a-zA-Z0-9\-_]+)(&.*)?$/, '$1') : '';
}
