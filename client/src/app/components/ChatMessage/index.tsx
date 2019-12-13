import * as React from "react";
import * as classNames from "classnames";
import * as style from "./style.scss";
import { ChatMessageData } from "app/models";

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
			{findYouTubeLink(data.text).fold(
				() => null,
				([url, videoID]) => (
					<div>
						<iframe
							width="560"
							height="315"
							src={`https://www.youtube.com/embed/${videoID}`}
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						/>
					</div>
				)
			)}
		</div>
	);
}
