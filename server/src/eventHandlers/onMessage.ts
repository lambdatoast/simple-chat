import * as moment from "moment";
import { ChatMessageData } from "../models/ChatMessage";

const validateText = (m: ChatMessageData): boolean => {
	return m.text !== "";
};

export const onMessage = (io: SocketIO.Server) => (m: ChatMessageData) => {
	console.log("[simple-chat-server](message): %s", JSON.stringify(m));
	if (validateText(m)) {
		io.emit("message", {
			...m,
			time: +moment.utc()
		});
	}
};
