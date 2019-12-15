import { EmojiData } from "app/models/Emoji";

export function loadEmoji(message: EmojiData) {
	return {
		type: "EMOJI/LOAD",
		message
	} as const;
}
