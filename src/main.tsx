import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
// import { configureStore } from 'app/store';
import { Router } from "react-router";
// import { App } from './app';
import { createStore } from "redux";

// prepare store
const history = createBrowserHistory();
const store = createStore(() => {}); //configureStore();

function App() {
	return (
		<div>
			<div>Chat | Settings</div>
			<div>
				<p>guest0001, 10:02: Want to bang tonight?</p>
				<p>guest0001, 10:02: I meant hang.</p>
				<p>guest0001, 10:02: Duck, auto-cucumber.</p>
				<p className="dh-msg-me">What?</p>
				<p>guest0001, 10:02: God donut.</p>
			</div>
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
