import { ChatMessageData } from "app/models";

export function appendMessage(message: ChatMessageData) {
	return {
		type: "APPEND_MESSAGE",
		message
	} as const;
}
