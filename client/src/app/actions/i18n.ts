export function loadLiterals(literals: i18n.I18nLiterals) {
	return {
		type: "I18N/LOAD_LITERALS",
		literals
	} as const;
}
