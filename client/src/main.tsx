import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as io from "socket.io-client";
import "bootstrap";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Chat } from "app/containers";
import { Settings } from "app/containers/Settings";
import { Header } from "app/components/Header";
import { appReducer } from "app/reducers";

const x: SocketIOClient.Socket = io("localhost:5001");

x.emit("message", { message: "yo bruh do you even message?!" });

x.on("message", (x: any) => {
	console.log("received message", x);
});

// prepare store
const store = createStore(appReducer);

// Log the initial state
console.log(store.getState());

store.subscribe(() => console.log(store.getState()));

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
						<Chat />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
