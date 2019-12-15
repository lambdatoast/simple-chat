import * as React from "react";
import * as style from "./style.scss";
import { ChatMessageData, SettingsData } from "app/models";
import { MessageComposer } from "./MessageComposer";
import { ButtonSend } from "./ButtonSend";

interface ChatInputProps {
	settings: SettingsData;
	sendMessage: (message: ChatMessageData) => void;
}

interface ChatInputState {
	messageText: string;
}

export class ChatInput extends React.Component<ChatInputProps, ChatInputState> {
	state = { messageText: "" };
	sendMessage = () => {
		this.props.sendMessage({
			text: this.state.messageText,
			time: +new Date(),
			user: { name: this.props.settings.userName }
		});
		this.setMessageText("");
	};
	setMessageText = (messageText: string) => {
		this.setState({ messageText });
	};
	render() {
		const { settings } = this.props;
		return (
			<>
				<div>
					Emojis
					<a
						href="#"
						onClick={() => {
							this.setMessageText(this.state.messageText + " [emoji:1f604] ");
						}}
					>
						:)
					</a>
				</div>
				<div className={style.chatInputContainer}>
					<MessageComposer
						value={this.state.messageText}
						onChange={this.setMessageText}
						settings={settings}
						sendMessage={this.sendMessage}
					/>
					<ButtonSend
						hide={settings.ctrlEnter === "on"}
						onClick={this.sendMessage}
					/>
				</div>
			</>
		);
	}
}
