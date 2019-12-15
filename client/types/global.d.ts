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

// Omit type https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046
// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
