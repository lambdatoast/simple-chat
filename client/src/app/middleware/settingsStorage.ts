import * as _ from "lodash";

const setItem = _.throttle((k: string, value: any) => {
	window.localStorage.setItem(k, JSON.stringify(value));
}, 1000);

export const settingsStorage = (store: any) => (next: (x: any) => void) => (
	action: any
) => {
	next(action);
	setItem("settings", store.getState().settings);
};
