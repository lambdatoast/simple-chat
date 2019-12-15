import * as React from "react";
import { EmojiSpec } from "app/models/Emoji";

interface EmojiCellProps {
	onSelect: (editorCode: string) => void;
	data: EmojiSpec;
}

export class EmojiCell extends React.Component<EmojiCellProps> {
	render() {
		const { onSelect, data } = this.props;
		// only first part needed for CDN png path, it seems.
		const code = data.codes.split(" ")[0].toLowerCase();
		return (
			<td>
				<a
					href="#"
					onClick={() => {
						onSelect(`[emoji:${code}]`);
					}}
				>
					{data.char}
				</a>
			</td>
		);
	}
}