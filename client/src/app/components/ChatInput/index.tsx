import * as React from "react";
import * as style from "./style.scss";
import { ChatMessageData } from "app/models";

interface ChatInputProps {
	appendMessage: (message: ChatMessageData) => void;
}

export class ChatInput extends React.Component<ChatInputProps> {
	state = { inputText: "" };
	render() {
		const { appendMessage } = this.props;
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
						appendMessage({
							text: this.state.inputText,
							time: "10:10",
							user: { name: "me" }
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
