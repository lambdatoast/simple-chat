import * as React from "react";
import { ChatMessageData } from "app/models";
import { ChatMessageList } from "app/components/ChatMessageList";

interface ChatProps {
	messages: ChatMessageData[];
}

export function Chat(props: ChatProps) {
	const { messages } = props;
	return (
		<div>
			<ChatMessageList messages={messages} />
		</div>
	);
}
