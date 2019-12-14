import { ChatMessageData } from "app/models";
import { appendMessage } from "app/actions";

type MessagesAction = ReturnType<typeof appendMessage>;

const initialState: ChatMessageData[] = [];

export function messagesReducer(
	state = initialState,
	action: MessagesAction
): ChatMessageData[] {
	switch (action.type) {
		case "APPEND_MESSAGE":
			return state.concat([action.message]);
		default:
			return state;
	}
}
