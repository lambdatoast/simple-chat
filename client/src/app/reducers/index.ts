import { combineReducers } from "redux";
import { messagesReducer } from "./messages";
import { settingsReducer } from "./settings";

export const appReducer = combineReducers({
	messages: messagesReducer,
	settings: settingsReducer
});

export type AppState = ReturnType<typeof appReducer>;
