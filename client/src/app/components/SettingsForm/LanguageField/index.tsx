import * as React from "react";
import * as style from "./style.scss";
import { Language } from "app/models";
import { SettingsFormLabel } from "../SettingsFormLabel";

interface LanguageFieldProps {
	value: string;
	label: string;
	languages: { [k: string]: string };
	onChange: (value: Language) => void;
}

const isLang = (s: string): s is Language => {
	return ["en", "es"].indexOf(s) !== -1;
};

export function LanguageField(props: LanguageFieldProps) {
	const { value, label, languages } = props;
	const langs: string[] = Object.keys(languages);
	return (
		<>
			<SettingsFormLabel>{label}</SettingsFormLabel>
			<select
				className={style.settingsFormSelect}
				name="language"
				value={value}
				onChange={(e: { target: { value: string } }) => {
					const lang = e.target.value;
					if (isLang(lang)) {
						props.onChange(lang);
					}
				}}
			>
				{langs.map(lang => {
					return (
						<option key={lang} value={lang}>
							{languages[lang]}
						</option>
					);
				})}
			</select>
		</>
	);
}
