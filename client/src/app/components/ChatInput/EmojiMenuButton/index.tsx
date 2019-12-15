import * as React from "react";
import * as style from "./style.scss";
import { EmojiMenuMode } from "../EmojiMenu";

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
			E
		</button>
	);
}
