export type UserName = string;

export type InterfaceColor = "light" | "dark";

export type ClockDisplay = 12 | 24;

export type CtrlEnter = "on" | "off";

export type Language = string;

export interface SettingsData {
	userName: UserName;
	interfaceColor: InterfaceColor;
	clockDisplay: ClockDisplay;
	ctrlEnter: CtrlEnter;
	language: Language;
}
