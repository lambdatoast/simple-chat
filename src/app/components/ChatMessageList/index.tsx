import * as React from "react";
import * as style from "./style.css";
import { ChatMessageData } from "app/models";
import { ChatMessage } from "../ChatMessage";

export type ChatMessageListProps = { messages: ChatMessageData[] };

export function ChatMessageList(props: ChatMessageListProps) {
	const { messages } = props;
	return (
		<div className={style.chatMessageList}>
			{messages.map(m => (
				<ChatMessage data={m} />
			))}
		</div>
	);
}
