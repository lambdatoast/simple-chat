import * as React from "react";
import * as style from "./style.scss";
import { SettingsData } from "app/models";

interface MessageComposerProps {
	settings: SettingsData;
	sendMessage: () => void;
	onChange: (text: string) => void;
	value: string;
}

export class MessageComposer extends React.Component<MessageComposerProps> {
	render() {
		const { settings, onChange, sendMessage, value } = this.props;
		const help = settings.ctrlEnter === "on" ? " (CTRL + ENTER to send)" : "";
		const placeholder = `Write a message${help}`;
		return (
			<textarea
				className={style.chatInputText}
				aria-label="Write a message"
				value={value}
				placeholder={placeholder}
				onChange={e => {
					onChange(e.target.value);
				}}
				onKeyPress={e => {
					const isCtrlEnter = e.key === "Enter" && e.ctrlKey;
					if (isCtrlEnter && settings.ctrlEnter === "on") {
						sendMessage();
					}
				}}
			/>
		);
	}
}
