import * as React from "react";
import * as classNames from "classnames";
import * as style from "./style.scss";
import { ChatMessageData } from "app/models";

export function ChatMessage(props: { data: ChatMessageData; isSelf: boolean }) {
	const { data, isSelf } = props;
	const classes = classNames({
		[style.chatMessage]: true,
		[style.self]: isSelf
	});
	return (
		<div className={classes}>
			{!isSelf ? (
				<header className={style.userName}>{data.user.name}</header>
			) : null}
			<span>{data.text}</span>
		</div>
	);
}
