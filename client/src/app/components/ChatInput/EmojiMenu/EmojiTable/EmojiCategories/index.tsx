import * as React from "react";
import * as style from "./style.scss";
import * as classNames from "classnames";

interface EmojiCategoriesProps {
	onSelect: (category: string) => void;
	categories: string[];
	active: string;
}

export class EmojiCategories extends React.Component<EmojiCategoriesProps> {
	render() {
		const { onSelect, categories, active } = this.props;
		return (
			<ul className={style.chatEmojiCategories}>
				{categories.map(category => {
					const classes = classNames({
						[style.chatEmojiCategoryButton]: true,
						[style.chatEmojiCategoryButtonActive]: active === category
					});
					return (
						<li className={style.chatEmojiCategory} key={category}>
							<a
								className={classes}
								onClick={() => {
									onSelect(category);
								}}
							>
								{category}
							</a>
						</li>
					);
				})}
			</ul>
		);
	}
}
