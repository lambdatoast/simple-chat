import { ChatMessageData } from "app/models";
import { appendMessage } from "app/actions";

type MessagesAction = ReturnType<typeof appendMessage>;

const initialState: ChatMessageData[] = [
	{ text: "Want to bang tonight?", time: "10:02", user: { name: "guest0001" } },
	{ text: "I meant hang", time: "10:02", user: { name: "guest0001" } },
	{ text: "Duck, auto-cucumber", time: "10:02", user: { name: "guest0001" } },
	{ text: "What?", time: "10:08", user: { name: "me" } },
	{ text: "God donut", time: "10:09", user: { name: "guest0001" } },
	{
		text: "How the duck do I turn this off",
		time: "10:09",
		user: { name: "guest0001" }
	},
	{ text: ":))))", time: "10:09", user: { name: "me" } }
];

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
