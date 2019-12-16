import { loadLiterals, setLanguage } from "app/actions";
import { I18nState } from "app/models/I18nState";
import { loadLanguage } from "app/i18n";

type Action = ReturnType<typeof loadLiterals> | ReturnType<typeof setLanguage>;

const initialState: I18nState = {
	literals: loadLanguage("en")
};

export function i18nReducer(state = initialState, action: Action): I18nState {
	switch (action.type) {
		case "I18N/LOAD_LITERALS":
			return {
				...state,
				literals: action.literals
			};
		case "SETTINGS/SET_LANGUAGE":
			return {
				...state,
				literals: loadLanguage(action.value)
			};
		default:
			return state;
	}
}
