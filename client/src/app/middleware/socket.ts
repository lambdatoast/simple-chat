export const socketMiddleware = (socket: SocketIOClient.Socket) => (
	store: object
) => (next: (x: any) => void) => (action: any) => {
	next(action);
	if (action.type === "SEND_MESSAGE") {
		socket.emit("message", action.message);
	}
};
