import * as React from "react";
import { ChatMessageData } from "app/models";

interface ChatInputProps {
	appendMessage: (message: ChatMessageData) => void;
}

export class ChatInput extends React.Component<ChatInputProps> {
	state = { inputText: "" };
	render() {
		const { appendMessage } = this.props;
		return (
			<div>
				<input
					value={this.state.inputText}
					placeholder="Enter message"
					onChange={e => {
						this.setState({ inputText: e.target.value });
					}}
				/>
				<button
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
				</button>
			</div>
		);
	}
}
