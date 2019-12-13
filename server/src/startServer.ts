import * as express from "express";
import * as socketIo from "socket.io";
import { createServer, Server } from "http";
import { ChatMessageData } from "./models/ChatMessage";
var cors = require("cors");

export function startServer() {
	const port: number = +process.env.PORT || 8080;
	const app: express.Application = express();

	app.use(cors());
	app.options("*", cors());

	const server: Server = createServer(app);
	const io: SocketIO.Server = socketIo(server);

	server.listen(port, () => {
		console.log("[simple-chat-server] Running on port %s", port);
	});

	io.on("connect", (socket: any) => {
		console.log("Connected client on port %s.", port);

		socket.on("message", (m: ChatMessageData) => {
			console.log("[simple-chat-server](message): %s", JSON.stringify(m));
			io.emit("message", m);
		});

		socket.on("disconnect", () => {
			console.log("Client disconnected");
		});
	});

	return app;
}
