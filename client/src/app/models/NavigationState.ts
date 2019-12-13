export type NavigationPage = "Chat" | "Settings";
export interface NavigationState {
	unreadCount: number;
	activePage: NavigationPage;
}
