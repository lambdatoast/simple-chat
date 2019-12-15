import * as React from "react";
import * as style from "./style.scss";
import { EmojiMenuMode } from "../EmojiMenu";
import HappyIcon from "./icons/happy.svg";
import * as classNames from "classnames";

interface EmojiMenuButtonProps {
	menuState: EmojiMenuMode;
	onClick: (menuState: EmojiMenuMode) => void;
}

export function EmojiMenuButton(props: EmojiMenuButtonProps) {
	const { menuState } = props;
	return (
		<button
			className={style.chatEmojiMenuButton}
			onClick={() => {
				props.onClick(menuState === "closed" ? "open" : "closed");
			}}
		>
			<HappyIcon
				className={classNames({
					[style.chatEmojiMenuButtonIcon]: menuState === "closed",
					[style.chatEmojiMenuButtonIconActive]: menuState === "open"
				})}
				height="2em"
			/>
		</button>
	);
}
