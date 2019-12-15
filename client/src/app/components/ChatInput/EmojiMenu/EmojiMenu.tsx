import * as React from "react";
import * as style from "./style.scss";
import * as classNames from "classnames";
import { EmojiData, EmojiSpec } from "app/models/Emoji";

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

	renderEmoji = (emoji: EmojiData) => {
		type EmojiReducer = {
			rows: JSX.Element[];
			cells: JSX.Element[];
			cellCount: number;
		};
		const categories = Object.keys(emoji);
		const { onSelect } = this.props;
		return (
			<table>
				{categories.map(category => {
					return (
						<tbody key={category}>
							{
								emoji[category].reduce<EmojiReducer>(
									(acc: EmojiReducer, e: EmojiSpec) => {
										const shouldAddNewRow = acc.cells.length % 5 === 0;
										const code = e.codes.split(" ")[0].toLowerCase();
										const cell = (
											<td key={e.codes}>
												<a
													href="#"
													onClick={() => {
														onSelect(`[emoji:${code}]`);
													}}
												>
													{e.char}
												</a>
											</td>
										);
										return {
											...acc,
											rows: shouldAddNewRow
												? acc.rows.concat(
														<tr key={`${category}-${acc.rows.length}`}>
															{acc.cells}
														</tr>
												  )
												: acc.rows,
											cells: shouldAddNewRow ? [cell] : acc.cells.concat([cell])
										};
									},
									{ rows: [], cells: [], cellCount: 0 }
								).rows
							}
						</tbody>
					);
				})}
			</table>
		);
	};

	render() {
		const { menuState } = this.props;
		const { emoji } = this.state;
		return (
			<div
				className={classNames({
					[style.chatEmojiMenu]: true,
					[style.chatEmojiMenuClosed]: menuState === "closed",
					[style.chatEmojiMenuOpen]: menuState === "open"
				})}
			>
				Emojis
				{emoji !== null ? this.renderEmoji(emoji) : null}
			</div>
		);
	}
}
