import { combineReducers } from "redux";
import { messagesReducer } from "./messages";
import { settingsReducer } from "./settings";
import { navigationReducer } from "./navigation";

export const appReducer = combineReducers({
	messages: messagesReducer,
	settings: settingsReducer,
	navigation: navigationReducer
});

export type AppState = ReturnType<typeof appReducer>;
