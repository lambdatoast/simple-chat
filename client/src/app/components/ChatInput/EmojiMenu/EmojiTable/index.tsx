import * as React from "react";
import * as style from "./style.scss";
import { EmojiData, EmojiSpec } from "app/models/Emoji";
import { EmojiCell } from "./EmojiCell";
import { EmojiCategories } from "./EmojiCategories";

interface EmojiTableProps {
	onSelect: (editorCode: string) => void;
	emoji: EmojiData;
}

interface EmojiTableState {
	activeCategory: string;
}

type EmojiReducerAcc = {
	rows: JSX.Element[];
	cells: JSX.Element[];
	cellCount: number;
};

export class EmojiTable extends React.Component<
	EmojiTableProps,
	EmojiTableState
> {
	categories: string[] = [];

	constructor(props: EmojiTableProps) {
		super(props);
		const { emoji } = this.props;
		this.categories = Object.keys(emoji);
		this.state = {
			activeCategory: this.categories[0]
		};
	}

	setActiveCategory = (activeCategory: string) => {
		this.setState({ activeCategory });
	};

	render() {
		const { onSelect, emoji } = this.props;
		const categories = this.categories;
		const { activeCategory } = this.state;
		return (
			<>
				<EmojiCategories
					categories={categories}
					onSelect={this.setActiveCategory}
					active={activeCategory}
				/>
				{categories
					.filter(category => category === activeCategory)
					.map(category => {
						const forest = emoji[category].reduce<EmojiReducerAcc>(
							(acc: EmojiReducerAcc, e: EmojiSpec) => {
								const cell = (
									<EmojiCell key={e.codes} data={e} onSelect={onSelect} />
								);
								const cells = acc.cells.concat([cell]);
								const isLastCell = acc.cellCount === emoji[category].length;
								const isRowFull = cells.length % 10 === 0;
								const shouldAddRow = isLastCell || isRowFull;
								const rows = shouldAddRow
									? acc.rows.concat(
											<tr key={`${category}-${acc.rows.length}`}>{cells}</tr>
									  )
									: acc.rows;
								return {
									...acc,
									rows,
									cells: shouldAddRow ? [] : cells,
									cellCount: acc.cellCount + 1
								};
							},
							{ rows: [], cells: [], cellCount: 1 }
						);
						return (
							<table className={style.chatEmojiTable} key={category}>
								<tbody key={category}>{forest.rows}</tbody>
							</table>
						);
					})}
			</>
		);
	}
}
