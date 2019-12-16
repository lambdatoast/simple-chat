/** Global definitions for development **/

// for style loader
declare module "*.css" {
	const styles: any;
	export = styles;
}

declare module "*.scss" {
	const styles: any;
	export = styles;
}

declare module "*.svg" {
	const svgComponent: React.ComponentType<React.SVGAttributes<{}>>;
	export default svgComponent;
}

declare module "twemoji" {
	const twemoji: {
		parse(what: string | HTMLElement): string;
	};
	export default twemoji;
}

declare namespace i18n {
	interface I18nLiterals {
		title: {
			[k: string]: string;
		};
		label: {
			[k: string]: string;
		};
		action: {
			[k: string]: string;
		};
		input: {
			[k: string]: string;
		};
		language: {
			[k: string]: string;
		};
	}
}

declare module "*.i18n.json" {
	const i18nMap: i18n.I18nLiterals;
	export = i18nMap;
}

// Omit type https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046
// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
