import * as React from "react";
import * as style from "./style.scss";
import {
	SettingsData,
	UserName,
	InterfaceColor,
	CtrlEnter,
	ClockDisplay,
	Language
} from "app/models";
import { InterfaceColorField } from "./InterfaceColorField";
import { CtrlEnterField } from "./CtrlEnterField";
import { UserNameField } from "./UserNameField";
import { ClockDisplayField } from "./ClockDisplayField";
import { ResetButton } from "./ResetButton";
import { LanguageField } from "./LanguageField";

interface SettingsFormProps {
	data: SettingsData;
	literals: i18n.I18nLiterals;
	setters: {
		setUserName: (value: UserName) => void;
		setInterfaceColor: (value: InterfaceColor) => void;
		setCtrlEnter: (value: CtrlEnter) => void;
		setClockDisplay: (value: ClockDisplay) => void;
		setLanguage: (value: Language) => void;
		resetToDefaults: () => void;
	};
}

export function SettingsForm(props: SettingsFormProps) {
	const {
		userName,
		interfaceColor,
		ctrlEnter,
		clockDisplay,
		language
	} = props.data;
	const {
		setInterfaceColor,
		setCtrlEnter,
		setUserName,
		setClockDisplay,
		setLanguage,
		resetToDefaults
	} = props.setters;
	const { literals } = props;

	return (
		<form className={style.settingsForm}>
			<UserNameField
				value={userName}
				onChange={setUserName}
				label={literals.label.userName}
			/>
			<InterfaceColorField
				value={interfaceColor}
				onChange={setInterfaceColor}
				label={literals.label.interfaceColor}
				optionLabel1={literals.label.light}
				optionLabel2={literals.label.dark}
			/>
			<ClockDisplayField
				value={clockDisplay}
				onChange={setClockDisplay}
				label={literals.label.clockDisplay}
				optionLabel1={`12 ${literals.label.hours}`}
				optionLabel2={`24 ${literals.label.hours}`}
			/>
			<CtrlEnterField
				value={ctrlEnter}
				onChange={setCtrlEnter}
				label={literals.label.ctrlEnter}
				optionLabel1={literals.label.on}
				optionLabel2={literals.label.off}
			/>
			<LanguageField
				value={language}
				onChange={setLanguage}
				label={literals.label.language}
				languages={literals.language}
			/>
			<ResetButton
				onClick={resetToDefaults}
				label={literals.action.resetToDefaults}
			/>
		</form>
	);
}
