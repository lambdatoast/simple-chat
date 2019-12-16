import * as React from "react";
import * as style from "./style.scss";
import { EmojiSpec } from "app/models/Emoji";

interface EmojiCellProps {
	onSelect: (editorCode: string) => void;
	data: EmojiSpec;
}

export class EmojiCell extends React.PureComponent<EmojiCellProps> {
	render() {
		const { onSelect, data } = this.props;
		// only first part needed for CDN png path, it seems.
		const code = data.codes.split(" ")[0].toLowerCase();
		return (
			<td>
				<a
					className={style.emojiCellBtn}
					onClick={() => {
						onSelect(`[emoji:${code}]`);
					}}
				>
					<img
						className={style.emojiCellEmoji}
						src={`https://twemoji.maxcdn.com/v/12.1.4/72x72/${code.toLowerCase()}.png`}
					/>
				</a>
			</td>
		);
	}
}
