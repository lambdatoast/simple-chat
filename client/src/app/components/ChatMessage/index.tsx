import * as React from "react";
import * as classNames from "classnames";
import * as style from "./style.css";
import { ChatMessageData } from "app/models";

export function ChatMessage(props: { data: ChatMessageData }) {
	const { data } = props;
	const classes = classNames({
		[style.chatMessage]: true,
		[style.self]: data.user.name === "me"
	});
	return <div className={classes}>{data.text}</div>;
}
