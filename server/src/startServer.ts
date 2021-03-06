import * as express from "express";
import * as socketIo from "socket.io";
import { createServer, Server } from "http";
import * as path from "path";
import { ChatServerState } from "./models/ChatServerState";
import { onMessage } from "./eventHandlers";
import { cleanEmoji } from "./cleanEmoji";
var cors = require("cors");
const allEmoji = require("../public/emoji.json");
const emoji = cleanEmoji(allEmoji);

function createExpressApp(): express.Application {
	const app: express.Application = express();
	app.use(cors());
	app.options("*", cors());
	app.get("/api/emoji", (req, res, next) => {
		res.json(emoji);
		next();
	});
	app.use(express.static(path.join("..", "client", "build")));
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

		socket.on("message", onMessage(io));

		socket.on("disconnect", () => {
			console.log("Client disconnected");
		});
	});

	return app;
}
