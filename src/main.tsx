import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { configureStore } from 'app/store';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { App } from './app';
import { createStore } from "redux";
import { ChatMessageData } from "app/models";
import { Chat } from "app/containers";
import { Settings } from "app/containers/Settings";
import { Header } from "app/components/Header";

// prepare store
const store = createStore(() => {}); //configureStore();

const messages: ChatMessageData[] = [
	{ text: "Want to bang tonight?", time: "10:02", user: { name: "guest0001" } },
	{ text: "I meant hang", time: "10:02", user: { name: "guest0001" } },
	{ text: "Duck, auto-cucumber", time: "10:02", user: { name: "guest0001" } },
	{ text: "What?", time: "10:08", user: { name: "me" } },
	{ text: "God donut", time: "10:09", user: { name: "guest0001" } },
	{
		text: "How the duck do I turn this off",
		time: "10:09",
		user: { name: "guest0001" }
	},
	{ text: ":))))", time: "10:09", user: { name: "me" } }
];

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route path="/settings">
						<Settings />
					</Route>
					<Route path="/">
						<Chat messages={messages} />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
