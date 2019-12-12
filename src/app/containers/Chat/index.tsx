import * as React from "react";
import { connect } from "react-redux";
import { ChatMessageData } from "app/models";
import { ChatMessageList } from "app/components/ChatMessageList";
import { AppState } from "app/reducers";
import { appendMessage } from "app/actions";
import { ChatInput } from "app/components/ChatInput";

interface ChatProps {
	messages: ChatMessageData[];
	appendMessage: (message: ChatMessageData) => void;
}

class ChatComponent extends React.Component<ChatProps> {
	state = { inputText: "" };
	render() {
		const { messages, appendMessage } = this.props;
		return (
			<div>
				<ChatMessageList messages={messages} />
				<ChatInput appendMessage={appendMessage} />
			</div>
		);
	}
}

function mapStateToProps(state: AppState) {
	return {
		messages: state.messages
	};
}

const mapDispatchToProps = {
	appendMessage
};

export const Chat = connect(mapStateToProps, mapDispatchToProps)(ChatComponent);
