import { InterfaceColor, ClockDisplay, CtrlEnter, Language } from "app/models";

export function setUserName(value: string) {
	return {
		type: "SETTINGS/SET_USER_NAME",
		value
	} as const;
}

export function setInterfaceColor(value: InterfaceColor) {
	return {
		type: "SETTINGS/SET_INTERFACE_COLOR",
		value
	} as const;
}

export function setClockDisplay(value: ClockDisplay) {
	return {
		type: "SETTINGS/SET_CLOCK_DISPLAY",
		value
	} as const;
}

export function setCtrlEnter(value: CtrlEnter) {
	return {
		type: "SETTINGS/SET_CTRL_ENTER",
		value
	} as const;
}

export function setLanguage(value: Language) {
	return {
		type: "SETTINGS/SET_LANGUAGE",
		value
	} as const;
}

export function loadSettings() {
	return {
		type: "SETTINGS/LOAD"
	} as const;
}

export function resetToDefaults() {
	return {
		type: "SETTINGS/RESET_TO_DEFAULTS"
	} as const;
}

export type SettingsAction =
	| ReturnType<typeof setUserName>
	| ReturnType<typeof setInterfaceColor>
	| ReturnType<typeof setClockDisplay>
	| ReturnType<typeof setCtrlEnter>
	| ReturnType<typeof setLanguage>
	| ReturnType<typeof resetToDefaults>;
