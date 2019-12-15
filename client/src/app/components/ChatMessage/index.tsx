import * as React from "react";
import * as classNames from "classnames";
import * as style from "./style.scss";
import { ChatMessageData, SettingsData } from "app/models";
import { ChatMessageHeader } from "./ChatMessageHeader";

type RegExpResult<T> = {
	fold: <T>(onFail: () => T, onSuccess: (r: RegExpMatchArray) => T) => T;
};

const YOUTUBE_URL_REGEXP: RegExp = /(?:https:\/\/)www\.youtube\.com\/watch\?v=(\w+)/;
const IMAGE_URL_REGEXP: RegExp = /(?:https?:\/\/.*\.(?:png|jpg|gif))/;
const OTHER_URL_REGEXP: RegExp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
const EMOJI_REGEXP: RegExp = /\[emoji:(\w+)\]/;

function match<T>(r: RegExp, s: string): RegExpResult<T> {
	const result: RegExpMatchArray | null = s.match(r);
	return result === null
		? {
				fold: onFail => onFail()
		  }
		: { fold: (onFail, onSuccess) => onSuccess(result) };
}

function parse(data: ChatMessageData) {
	const { text } = data;
	return text.split(/\s/).map((s: string, i: number) =>
		match(YOUTUBE_URL_REGEXP, s).fold(
			() =>
				match(IMAGE_URL_REGEXP, s).fold(
					() =>
						match(OTHER_URL_REGEXP, s).fold(
							() =>
								match(EMOJI_REGEXP, s).fold(
									() => <span key={`text-${i}`}> {s} </span>,
									([editorCode, emojiCode]) => (
										<img
											className={style.chatMessageEmoji}
											key={`emoji-${i}`}
											src={`https://twemoji.maxcdn.com/v/12.1.4/72x72/${emojiCode.toLowerCase()}.png`}
										/>
									)
								),
							() => (
								<a
									className={style.chatMessageContentUrl}
									key={`url-${i}`}
									href={s}
								>
									{s}
								</a>
							)
						),
					() => <img key={`img-${i}`} src={s} width="100%" height="100%" />
				),
			([url, videoID]) => (
				<div key={`yt-${i}`}>
					<iframe
						width="100%"
						height="100%"
						src={`https://www.youtube.com/embed/${videoID}`}
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					/>
				</div>
			)
		)
	);
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
		[style.chatMessageSelf]: isSelf
	});
	return (
		<div className={classes}>
			<ChatMessageHeader data={data} settings={settings} isSelf={isSelf} />
			<>{parse(data)}</>
		</div>
	);
}
