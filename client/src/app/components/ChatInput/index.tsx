import * as React from "react";
import * as style from "./style.scss";
import { ChatMessageData, SettingsData } from "app/models";

interface ChatInputProps {
	settings: SettingsData;
	sendMessage: (message: ChatMessageData) => void;
}

export class ChatInput extends React.Component<ChatInputProps> {
	state = { inputText: "" };
	render() {
		const { sendMessage, settings } = this.props;
		return (
			<div className={style.chatInput}>
				<textarea
					aria-label="Enter message"
					value={this.state.inputText}
					placeholder="Enter message"
					onChange={e => {
						this.setState({ inputText: e.target.value });
					}}
				/>
				<div
					className={style.chatInputSendBtn}
					onClick={() => {
						sendMessage({
							text: this.state.inputText,
							time: "10:10",
							user: { name: settings.userName }
						});
						this.setState({ inputText: "" });
					}}
				>
					Send
				</div>
			</div>
		);
	}
}
