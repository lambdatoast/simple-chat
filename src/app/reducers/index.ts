import { combineReducers } from "redux";
import { messagesReducer } from "./messages";

export const appReducer = combineReducers({
	messages: messagesReducer
});

export type AppState = ReturnType<typeof appReducer>;
