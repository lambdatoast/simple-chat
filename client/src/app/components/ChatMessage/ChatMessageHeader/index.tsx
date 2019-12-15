import * as React from "react";
import * as moment from "moment";
import { ChatMessageData, SettingsData } from "app/models";
import * as style from "./style.scss";
import * as classNames from "classnames";

interface ChatMessageHeaderProps {
	settings: SettingsData;
	data: ChatMessageData;
	isSelf: boolean;
}

export function ChatMessageHeader(props: ChatMessageHeaderProps) {
	const { data, settings, isSelf } = props;
	const timeFormat = settings.clockDisplay === 12 ? "h:mmA" : "HH:mm";
	return (
		<div
			className={classNames({
				[style.chatMessageUserName]: true,
				[style.chatMessageUserNameOther]: !isSelf,
				[style.chatMessageUserNameSelf]: isSelf
			})}
		>
			{!isSelf ? <span>{data.user.name}, </span> : null}
			<span>{moment(data.time).format(timeFormat)}</span>
		</div>
	);
}
