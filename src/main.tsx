import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
// import { configureStore } from 'app/store';
import { Router } from "react-router";
// import { App } from './app';
import { createStore } from "redux";
import { ChatMessageData } from "app/models";
import { ChatMessageList } from "app/components/ChatMessageList";

// prepare store
const history = createBrowserHistory();
const store = createStore(() => {}); //configureStore();

const messages: ChatMessageData[] = [
	{ text: "Want to bang tonight?", time: "10:02", user: { name: "guest0001" } },
	{ text: "I meant hang", time: "10:02", user: { name: "guest0001" } },
	{ text: "Duck, auto-cucumber", time: "10:02", user: { name: "guest0001" } },
	{ text: "What?", time: "10:02", user: { name: "me" } },
	{ text: "God donut", time: "10:02", user: { name: "guest0001" } }
];

function App() {
	return (
		<div>
			<div>Chat | Settings</div>
			<ChatMessageList messages={messages} />
		</div>
	);
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
