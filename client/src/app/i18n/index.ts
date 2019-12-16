const en = require("./en.i18n.json");
const es = require("./es.i18n.json");

const languages = {
	en,
	es
};

export type I18NLanguage = keyof typeof languages;

export function loadLanguage(lang: I18NLanguage) {
	return languages[lang];
}
