export type User = { name: string };
export function createUser(name: string): User {
	return { name };
}
export type ChatMessageData = {
	text: string;
	time: string;
	user: User;
};
