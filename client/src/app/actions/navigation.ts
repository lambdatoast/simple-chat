import { NavigationPage } from "app/models";

export function setActivePage(page: NavigationPage) {
	return {
		type: "SET_ACTIVE_PAGE",
		page
	} as const;
}
