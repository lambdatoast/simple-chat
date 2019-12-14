import * as express from "express";
import * as socketIo from "socket.io";
import { createServer, Server } from "http";
import * as moment from "moment";
import { ChatMessageData } from "./models/ChatMessage";
import { ChatServerState } from "./models/ChatServerState";
var cors = require("cors");

function createExpressApp(): express.Application {
	const app: express.Application = express();
	app.use(cors());
	app.options("*", cors());
	return app;
}

export function startServer() {
	const port: number = +process.env.PORT || 8080;
	const app: express.Application = createExpressApp();
	const server: Server = createServer(app);
	const io: SocketIO.Server = socketIo(server);

	let state: ChatServerState = {
		nextUID: 1
	};

	server.listen(port, () => {
		console.log("[simple-chat-server] Running on port %s", port);
	});

	io.on("connect", (socket: any) => {
		console.log("Connected client on port %s.", port);

		io.emit("guestUserName", `guest-${state.nextUID}`);
		state.nextUID++;

		socket.on("message", (m: ChatMessageData) => {
			console.log("[simple-chat-server](message): %s", JSON.stringify(m));
			io.emit("message", {
				...m,
				time: +moment.utc()
			});
		});

		socket.on("disconnect", () => {
			console.log("Client disconnected");
		});
	});

	return app;
}
