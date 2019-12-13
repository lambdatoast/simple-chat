import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import * as io from "socket.io-client";
import "bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Chat, Settings, Header } from "app/containers";
import { appReducer } from "app/reducers";
import { ChatMessageData } from "app/models";
import { appendMessage } from "app/actions";
import { socketMiddleware } from "app/middleware/socket";

const socket: SocketIOClient.Socket = io("localhost:5001");

// prepare store
const store = createStore(
	appReducer,
	applyMiddleware(thunkMiddleware, socketMiddleware(socket))
);

socket.on("message", (m: ChatMessageData) => {
	store.dispatch(appendMessage(m));
});

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
