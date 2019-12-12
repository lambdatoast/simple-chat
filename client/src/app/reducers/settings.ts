import { SettingsData } from "app/models";
import { setUserName, setInterfaceColor } from "app/actions";

type SettingsAction =
	| ReturnType<typeof setUserName>
	| ReturnType<typeof setInterfaceColor>;

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
		case "SET_USER_NAME":
			return { ...state, userName: action.value };
		case "SET_INTERFACE_COLOR":
			return { ...state, interfaceColor: action.value };
		default:
			return state;
	}
}
