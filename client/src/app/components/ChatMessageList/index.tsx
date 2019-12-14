import * as React from "react";
import * as style from "./style.scss";
import { ChatMessageData, SettingsData } from "app/models";
import { ChatMessage } from "../ChatMessage";

export type ChatMessageListProps = {
	settings: SettingsData;
	messages: ChatMessageData[];
};

export class ChatMessageList extends React.Component<ChatMessageListProps> {
	myRef: React.RefObject<HTMLDivElement> = React.createRef();

	constructor(props: ChatMessageListProps) {
		super(props);
		const r: any = React.createRef();
		this.myRef = r;
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}

	scrollToBottom() {
		const el = this.myRef.current;
		if (el !== null) {
			el.scrollTop = el.scrollHeight;
		}
	}

	render() {
		const { messages, settings } = this.props;
		return (
			<div className={style.chatMessageList} ref={this.myRef}>
				{messages.map((m, i) => (
					<ChatMessage
						settings={settings}
						isSelf={m.user.name === settings.userName}
						data={m}
						key={`${i}-${m.user.name}`}
					/>
				))}
			</div>
		);
	}
}
