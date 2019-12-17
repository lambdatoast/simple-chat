import * as React from "react";
import * as style from "./style.scss";
import { SettingsData } from "app/models";
import ContentEditable from "react-contenteditable";

interface MessageComposerProps {
	settings: SettingsData;
	sendMessage: () => void;
	onChange: (text: string) => void;
	value: string;
}

export class MessageComposer extends React.Component<MessageComposerProps> {
	private contentEditable: React.RefObject<HTMLDivElement>;
	constructor(props: MessageComposerProps) {
		super(props);
		this.contentEditable = React.createRef();
	}
	render() {
		const { settings, onChange, sendMessage, value } = this.props;
		const help = settings.ctrlEnter === "on" ? " (CTRL + ENTER to send)" : "";
		const placeholder = `Write a message${help}`;
		return (
			<ContentEditable
				className={style.chatInputText}
				innerRef={this.contentEditable}
				html={value}
				disabled={false}
				onChange={e => {
					onChange(e.target.value);
				}}
				onKeyUp={e => {
					const isCtrlEnter = e.key === "Enter" && e.ctrlKey;
					if (isCtrlEnter && settings.ctrlEnter === "on") {
						sendMessage();
					}
				}}
				placeholder={placeholder}
			/>
		);
	}
}
