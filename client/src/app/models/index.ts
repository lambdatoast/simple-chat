export type User = { name: string };

export type ChatMessageData = {
	text: string;
	time: string;
	user: User;
};

export * from "./Settings";
