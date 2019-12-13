import * as React from "react";
import * as style from "./style.scss";
import { connect } from "react-redux";
import { ChatMessageData, SettingsData } from "app/models";
import { ChatMessageList } from "app/components/ChatMessageList";
import { AppState } from "app/reducers";
import { sendMessage } from "app/actions";
import { ChatInput } from "app/components/ChatInput";

interface ChatProps {
	messages: ChatMessageData[];
	settings: SettingsData;
	sendMessage: (message: ChatMessageData) => void;
}

class ChatComponent extends React.Component<ChatProps> {
	render() {
		const { messages, settings, sendMessage } = this.props;
		return (
			<div className={style.chatContainer}>
				<ChatMessageList settings={settings} messages={messages} />
				<ChatInput settings={settings} sendMessage={sendMessage} />
			</div>
		);
	}
}

function mapStateToProps(state: AppState) {
	return {
		messages: state.messages,
		settings: state.settings
	};
}

const mapDispatchToProps = {
	sendMessage
};

export const Chat = connect(mapStateToProps, mapDispatchToProps)(ChatComponent);
