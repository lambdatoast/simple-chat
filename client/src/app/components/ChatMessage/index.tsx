import * as React from "react";
import * as classNames from "classnames";
import * as style from "./style.scss";
import { ChatMessageData, SettingsData } from "app/models";
import { ChatMessageHeader } from "./ChatMessageHeader";
import { Replacer, Processor, parseWith } from "./lib";

// The "^" at the beginning of these regexes is CRUCIAL.
// TODO: Create private constructor or something, to enforce this,
// because it's easy to forget about this.
const YOUTUBE_URL_REGEXP: RegExp = /^(?:https:\/\/)www\.youtube\.com\/watch\?v=(\w+)/;
const IMAGE_URL_REGEXP: RegExp = /^https?:\/\/[^<>]+\.(?:png|jpg|gif)/;
const AUDIO_URL_REGEXP: RegExp = /^https?:\/\/[^<>]+\.(?:wav|mp3|ogg)/;
const URL_REGEXP: RegExp = /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
const CODE_REGEXP: RegExp = /^```([^`]*)```/;

function youTubeReplacer(result: RegExpMatchArray) {
	const el = document.createElement("iframe");
	el.width = "100%";
	el.height = "100%";
	el.src = `https://www.youtube.com/embed/${result[1]}`;
	el.allow =
		"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
	return el.outerHTML;
}

function imageReplacer(result: RegExpMatchArray): string {
	const el = document.createElement("img");
	el.className = style.chatMessageImage;
	el.src = result[0];
	return el.outerHTML;
}

function audioReplacer(result: RegExpMatchArray): string {
	const figure = document.createElement("figure");
	const figureCaption = document.createElement("figcaption");
	const audio = document.createElement("audio");
	audio.controls = true;
	audio.src = result[0];
	audio.textContent = "Your browser does not support the audio element";
	figure.appendChild(figureCaption);
	figure.appendChild(audio);
	return audio.outerHTML;
}

function urlReplacer(result: RegExpMatchArray): string {
	const el = document.createElement("a");
	el.href = result[0];
	el.className = style.chatMessageUrl;
	el.target = "_blank";
	el.innerHTML = result[0];
	return el.outerHTML;
}

function codeReplacer(result: RegExpMatchArray): string {
	return `<pre>${result[1]}</pre>`;
}

interface ChatMessageProps {
	data: ChatMessageData;
	isSelf: boolean;
	settings: SettingsData;
}

// To avoid messing up URLs within IMG, etc. tags.
// i.e. don't break the emoji!
const nonReplacer: Replacer = result => result[0];

const processors: Processor[] = [
	[/^<img[^>]*>/, nonReplacer],
	[YOUTUBE_URL_REGEXP, youTubeReplacer],
	[IMAGE_URL_REGEXP, imageReplacer],
	[AUDIO_URL_REGEXP, audioReplacer],
	[URL_REGEXP, urlReplacer],
	[CODE_REGEXP, codeReplacer]
];

const parse = parseWith(processors);

export function ChatMessage(props: ChatMessageProps) {
	const { data, settings, isSelf } = props;
	const classes = classNames({
		[style.chatMessage]: true,
		[style.chatMessageSelf]: isSelf
	});
	return (
		<div className={classes}>
			<ChatMessageHeader data={data} settings={settings} isSelf={isSelf} />
			<div dangerouslySetInnerHTML={{ __html: parse(data.text) }}></div>
		</div>
	);
}
