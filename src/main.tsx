import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { configureStore } from 'app/store';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { App } from './app';
import { createStore } from "redux";
import { Chat } from "app/containers";
import { Settings } from "app/containers/Settings";
import { Header } from "app/components/Header";
import { appReducer } from "app/reducers";

// prepare store
const store = createStore(appReducer); //configureStore();

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
