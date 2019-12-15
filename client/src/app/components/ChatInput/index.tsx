import * as React from "react";
import * as style from "./style.scss";
import { ChatMessageData, SettingsData } from "app/models";
import { MessageComposer } from "./MessageComposer";
import { ButtonSend } from "./ButtonSend";
import { EmojiMenu, EmojiMenuMode } from "./EmojiMenu";
import { EmojiMenuButton } from "./EmojiMenuButton";

interface ChatInputProps {
	settings: SettingsData;
	sendMessage: (message: ChatMessageData) => void;
}

interface ChatInputState {
	messageText: string;
	emojiMenuState: EmojiMenuMode;
}

const DEFAULT_EMOJI_MENU_STATE: EmojiMenuMode = "closed";

export class ChatInput extends React.Component<ChatInputProps, ChatInputState> {
	state = { messageText: "", emojiMenuState: DEFAULT_EMOJI_MENU_STATE };
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
	onEmojiSelect = (code: string) => {
		this.setMessageText(this.state.messageText + ` ${code} `);
	};
	setEmojiMenuState = (emojiMenuState: EmojiMenuMode) => {
		this.setState({ emojiMenuState });
	};
	render() {
		const { settings } = this.props;
		return (
			<>
				<EmojiMenu
					menuState={this.state.emojiMenuState}
					onSelect={this.onEmojiSelect}
				/>
				<div className={style.chatInputContainer}>
					<EmojiMenuButton
						menuState={this.state.emojiMenuState}
						onClick={this.setEmojiMenuState}
					/>
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
