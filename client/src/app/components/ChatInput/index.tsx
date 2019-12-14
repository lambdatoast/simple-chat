import * as React from "react";
import * as style from "./style.scss";
import { ChatMessageData, SettingsData } from "app/models";

interface ChatInputProps {
	settings: SettingsData;
	sendMessage: (message: ChatMessageData) => void;
}

export class ChatInput extends React.Component<ChatInputProps> {
	state = { inputText: "" };
	sendMessage = () => {
		this.props.sendMessage({
			text: this.state.inputText,
			time: +new Date(),
			user: { name: this.props.settings.userName }
		});
		this.setState({ inputText: "" });
	};
	render() {
		const { settings } = this.props;
		return (
			<div className={style.chatInput}>
				<textarea
					aria-label="Enter message"
					value={this.state.inputText}
					placeholder="Enter message"
					onChange={e => {
						this.setState({ inputText: e.target.value });
					}}
					onKeyPress={e => {
						const isCtrlEnter = e.key === "Enter" && e.ctrlKey;
						if (isCtrlEnter && settings.ctrlEnter === "on") {
							this.sendMessage();
						}
					}}
				/>
				<div
					className={style.chatInputSendBtn}
					onClick={() => {
						this.sendMessage();
					}}
				>
					Send
				</div>
			</div>
		);
	}
}
