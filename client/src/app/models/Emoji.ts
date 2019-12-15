export interface EmojiSpec {
	codes: string;
	char: string;
	name: string;
	category: string;
}

export type EmojiData = { [k: string]: EmojiSpec[] };
