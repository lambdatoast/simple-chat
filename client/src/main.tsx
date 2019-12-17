import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import * as io from "socket.io-client";
import "bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Chat, Settings } from "app/containers";
import { appReducer } from "app/reducers";
import { ChatMessageData, SettingsData } from "app/models";
import { appendMessage, setUserName, setInterfaceColor } from "app/actions";
import { socketMiddleware } from "app/middleware/socket";
import "./style.scss";
import { settingsStorage } from "app/middleware/settingsStorage";
import { loadLanguage } from "app/i18n";
import { loadLiterals } from "app/actions/i18n";

const socket: SocketIOClient.Socket = io("localhost:5001");

const settingsSerialized: string | null = localStorage.getItem("settings");
const settings: SettingsData | null = settingsSerialized
	? JSON.parse(settingsSerialized)
	: null;

// prepare store
const store = createStore(
	appReducer,
	settings ? { settings } : {},
	applyMiddleware(thunkMiddleware, socketMiddleware(socket), settingsStorage)
);

if (settings) {
	const lang: i18n.I18nLiterals = loadLanguage(settings.language);
	store.dispatch(loadLiterals(lang));
}

socket.on("message", (m: ChatMessageData) => {
	store.dispatch(appendMessage(m));
});

socket.on("guestUserName", (userName: string) => {
	if (settings === null) {
		store.dispatch(setUserName(userName));
	}
});

if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	store.dispatch(setInterfaceColor("dark"));
}

// Log the initial state
console.log(store.getState());

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/settings">
					<Settings />
				</Route>
				<Route path="/">
					<Chat />
				</Route>
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
