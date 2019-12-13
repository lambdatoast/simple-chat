import { NavigationState } from "app/models";
import { setActivePage, appendMessage } from "app/actions";

type MessagesAction =
	| ReturnType<typeof setActivePage>
	| ReturnType<typeof appendMessage>;

const initialState: NavigationState = {
	activePage: "Chat",
	unreadCount: 0
};

export function navigationReducer(
	state = initialState,
	action: MessagesAction
): NavigationState {
	switch (action.type) {
		case "APPEND_MESSAGE":
			return {
				...state,
				unreadCount:
					state.activePage !== "Chat"
						? state.unreadCount + 1
						: state.unreadCount
			};
		case "SET_ACTIVE_PAGE":
			return {
				...state,
				activePage: action.page,
				unreadCount: 0
			};
		default:
			return state;
	}
}
