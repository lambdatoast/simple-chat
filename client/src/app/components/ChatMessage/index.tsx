import * as React from "react";
import * as classNames from "classnames";
import * as moment from "moment";
import * as style from "./style.scss";
import { ChatMessageData, SettingsData } from "app/models";

type RegExpResult<T> = {
	fold: <T>(onFail: () => T, onSuccess: (r: RegExpMatchArray) => T) => T;
};

function findYouTubeLink<T>(s: string): RegExpResult<T> {
	const youtube: RegExp = /(?:https:\/\/)www\.youtube\.com\/watch\?v=(\w+)/;
	const result: RegExpMatchArray | null = s.match(youtube);
	return result === null
		? {
				fold: onFail => onFail()
		  }
		: { fold: (onFail, onSuccess) => onSuccess(result) };
}

interface ChatMessageProps {
	data: ChatMessageData;
	isSelf: boolean;
	settings: SettingsData;
}

export function ChatMessage(props: ChatMessageProps) {
	const { data, settings, isSelf } = props;
	const classes = classNames({
		[style.chatMessage]: true,
		[style.self]: isSelf
	});
	const timeFormat = settings.clockDisplay === 12 ? "h:mmA" : "HH:mm";
	return (
		<div className={classes}>
			<div className={style.userName}>
				{!isSelf ? <span>{data.user.name}, </span> : null}
				<span>{moment(data.time).format(timeFormat)}</span>
			</div>
			<span>{data.text}</span>
			{findYouTubeLink(data.text).fold(
				() => null,
				([url, videoID]) => (
					<div>
						<iframe
							width="100%"
							height="100%"
							src={`https://www.youtube.com/embed/${videoID}`}
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						/>
					</div>
				)
			)}
		</div>
	);
}
