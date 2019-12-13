import { ChatMessageData } from "app/models";

export function appendMessage(message: ChatMessageData) {
	return {
		type: "APPEND_MESSAGE",
		message
	} as const;
}

export function sendMessage(message: ChatMessageData) {
	return {
		type: "SEND_MESSAGE",
		message
	} as const;
}
