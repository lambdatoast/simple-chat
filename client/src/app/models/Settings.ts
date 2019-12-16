import { I18NLanguage } from "app/i18n";

export type UserName = string;

export type InterfaceColor = "light" | "dark";

export type ClockDisplay = 12 | 24;

export type CtrlEnter = "on" | "off";

export type Language = I18NLanguage;

export interface SettingsData {
	userName: UserName;
	interfaceColor: InterfaceColor;
	clockDisplay: ClockDisplay;
	ctrlEnter: CtrlEnter;
	language: Language;
}
