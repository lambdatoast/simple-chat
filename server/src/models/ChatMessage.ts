interface User {
	name: string;
}

type UnixEpochTimestamp = number;

export type ChatMessageData = {
	text: string;
	time: UnixEpochTimestamp;
	user: User;
};
