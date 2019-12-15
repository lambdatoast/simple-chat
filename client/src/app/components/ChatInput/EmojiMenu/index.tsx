import * as React from "react";
import * as style from "./style.scss";
import * as classNames from "classnames";
import { EmojiData } from "app/models/Emoji";
import { EmojiTable } from "./EmojiTable";

export type EmojiMenuMode = "open" | "closed";

interface EmojiMenuProps {
	onSelect: (editorCode: string) => void;
	menuState: EmojiMenuMode;
}

interface EmojiMenuState {
	emoji: EmojiData | null;
}

export class EmojiMenu extends React.Component<EmojiMenuProps, EmojiMenuState> {
	constructor(props: EmojiMenuProps) {
		super(props);
		this.state = {
			emoji: null
		};
	}

	setEmoji = (emoji: EmojiData) => this.setState({ emoji });

	fetchEmoji = () =>
		fetch("/api/emoji").then(r => {
			r.json().then(this.setEmoji);
		});

	componentDidMount() {
		this.fetchEmoji();
	}

	render() {
		const { menuState, onSelect } = this.props;
		const { emoji } = this.state;
		const classes = classNames({
			[style.chatEmojiMenu]: true,
			[style.chatEmojiMenuClosed]: menuState === "closed",
			[style.chatEmojiMenuOpen]: menuState === "open"
		});
		return (
			<div className={classes}>
				{emoji !== null ? (
					<EmojiTable emoji={emoji} onSelect={onSelect} />
				) : null}
			</div>
		);
	}
}
