import { combineReducers } from "redux";
import { messagesReducer } from "./messages";
import { settingsReducer } from "./settings";
import { navigationReducer } from "./navigation";
import { i18nReducer } from "./i18n";

export const appReducer = combineReducers({
	messages: messagesReducer,
	settings: settingsReducer,
	navigation: navigationReducer,
	i18n: i18nReducer
});

export type AppState = ReturnType<typeof appReducer>;
