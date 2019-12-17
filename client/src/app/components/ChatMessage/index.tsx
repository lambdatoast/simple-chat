import * as React from "react";
import * as classNames from "classnames";
import * as style from "./style.scss";
import { ChatMessageData, SettingsData } from "app/models";
import { ChatMessageHeader } from "./ChatMessageHeader";

// The "^" at the beginning of these regexes is CRUCIAL.
// TODO: Create private constructor or something, to enforce this,
// because it's easy to forget about this.
const YOUTUBE_URL_REGEXP: RegExp = /^(?:https:\/\/)www\.youtube\.com\/watch\?v=(\w+)/;
const IMAGE_URL_REGEXP: RegExp = /^https?:\/\/[^<>]+\.(?:png|jpg|gif)/;
const URL_REGEXP: RegExp = /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
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

function urlReplacer(result: RegExpMatchArray): string {
	const el = document.createElement("a");
	el.href = result[0];
	el.className = style.chatMessageUrl;
	el.target = "_blank";
	el.innerHTML = result[0];
	return el.outerHTML;
}

type IntermediateResult = {
	input: string;
	output: string;
};

function stepByMatch(
	result: RegExpMatchArray,
	current: IntermediateResult,
	replacer: (result: RegExpMatchArray) => string
): IntermediateResult {
	return {
		...current,
		output: current.output + replacer(result),
		input: current.input.slice(result[0].length)
	};
}

function stepByFail(current: IntermediateResult): IntermediateResult {
	return {
		...current,
		output: current.output + current.input.slice(0, 1),
		input: current.input.slice(1)
	};
}

type Replacer = (result: RegExpMatchArray) => string;
type Processor = [RegExp, Replacer];

// To avoid messing up URLs within IMG, etc. tags.
// i.e. don't break the emoji!
const nonReplacer: Replacer = result => result[0];

const processors: Processor[] = [
	[/^<img[^>]*>/, nonReplacer],
	[YOUTUBE_URL_REGEXP, youTubeReplacer],
	[IMAGE_URL_REGEXP, imageReplacer],
	[URL_REGEXP, urlReplacer]
];

const parseWith = (processors: Processor[]) => (s: string): string => {
	let input = s;
	let output = "";
	while (input.length > 0) {
		const current: IntermediateResult = {
			input,
			output
		};
		type Replacement = [RegExpMatchArray, Replacer];
		const winner: Replacement | null = processors.reduce(
			(acc: Replacement | null, [regex, replacer]) => {
				if (acc !== null) {
					return acc;
				} else {
					const result: RegExpMatchArray | null = input.match(regex);
					return result === null ? null : [result, replacer];
				}
			},
			null
		);
		if (winner !== null) {
			const [result, replacer] = winner;
			const next: IntermediateResult = stepByMatch(result, current, replacer);
			output = next.output;
			input = next.input;
		} else {
			const next: IntermediateResult = stepByFail(current);
			output = next.output;
			input = next.input;
		}
	}
	return output;
};

interface ChatMessageProps {
	data: ChatMessageData;
	isSelf: boolean;
	settings: SettingsData;
}

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
