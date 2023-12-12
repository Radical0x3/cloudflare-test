export interface TranslateRequestBody {
	language: string;
	value: string;
}

export interface TranslateType {
	place: string;
	key: string;
	text?: string | null;
	lang: string;
}

export type TranslateResponseJSON = Record<string, string>;
