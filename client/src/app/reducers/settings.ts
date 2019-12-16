import { SettingsData } from "app/models";
import { SettingsAction } from "app/actions";

const initialState: SettingsData = {
	userName: "me",
	interfaceColor: "light",
	clockDisplay: 12,
	ctrlEnter: "off",
	language: "en"
};

export function settingsReducer(
	state = initialState,
	action: SettingsAction
): SettingsData {
	switch (action.type) {
		case "SETTINGS/SET_USER_NAME":
			return { ...state, userName: action.value };
		case "SETTINGS/SET_INTERFACE_COLOR":
			return { ...state, interfaceColor: action.value };
		case "SETTINGS/SET_CLOCK_DISPLAY":
			return { ...state, clockDisplay: action.value };
		case "SETTINGS/SET_CTRL_ENTER":
			return { ...state, ctrlEnter: action.value };
		case "SETTINGS/SET_LANGUAGE":
			return { ...state, language: action.value };
		case "SETTINGS/RESET_TO_DEFAULTS":
			return { ...initialState };
		default:
			return state;
	}
}
