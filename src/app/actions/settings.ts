import { InterfaceColor, ClockDisplay, CtrlEnter, Language } from "app/models";

export function setUserName(value: string) {
	return {
		type: "SET_USER_NAME",
		value
	} as const;
}

export function setInterfaceColor(value: InterfaceColor) {
	return {
		type: "SET_INTERFACE_COLOR",
		value
	} as const;
}

export function setClockDisplay(value: ClockDisplay) {
	return {
		type: "SET_CLOCK_DISPLAY",
		value
	};
}

export function setCtrlEnter(value: CtrlEnter) {
	return {
		type: "SET_CTRL_ENTER",
		value
	};
}

export function setLanguage(value: Language) {
	return {
		type: "SET_LANGUAGE",
		value
	};
}
