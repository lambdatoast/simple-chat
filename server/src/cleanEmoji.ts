type EmojiSpec = {
	codes: string;
	char: string;
	name: string;
	category: string;
};

type EmojiByCategory = { [k: string]: EmojiSpec[] };

/**
 * Get rid of most emojis.
 * After some quick testing, a lot seemed to NOT be supported by twemoji.
 * (twemoji = library I'm using on the frontend for parsing emoji codes).
 *
 * Also, an additional hack (drop items with ":" in name) to get rid of subcategories.
 * Idea for complete emoji support: Lazy load. Create server endpoint for loading emoji subcategories.
 *
 * @param all Huge array of emoji spec as downloaded from https://unpkg.com/emoji.json/emoji.json
 */
export function cleanEmoji(all: EmojiSpec[]) {
	const categories: EmojiByCategory = {};
	// A cache used to enforce a single variation of each emoji.
	const seenNames: { [k: string]: string } = {};
	all.forEach(spec => {
		const isNotSubCategory = spec.name.indexOf(":") === -1;
		const isSupported = true; // spec.codes.length === 4; // Hack.
		const isNotVariation = seenNames[spec.name] === undefined;
		const shouldAdd = isNotSubCategory && isSupported && isNotVariation;
		const value = shouldAdd ? [spec] : [];
		const category = spec.category.replace(/\(.*?\)/, "").trim();
		seenNames[spec.name] = spec.name;
		categories[category] = categories[category]
			? categories[category].concat(value)
			: value;
	});
	const clean: EmojiByCategory = Object.keys(categories).reduce((acc, k) => {
		return categories[k].length > 0 ? { ...acc, [k]: categories[k] } : acc;
	}, {});
	return clean;
}
