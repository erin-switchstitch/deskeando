import http from "http";

import app from "./app";
import { connectDb, disconnectDb } from "./db";


const port = parseInt(process.env.PORT || "3000");

const server = http.createServer(app);

// app.listen(3100, function () {
// 	console.log("Server is listening on port 3000. Ready to accept requests!");
// });

server.on("listening", () => {
	const addr = server.address();
	const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
	// eslint-disable-next-line no-console
	console.log(`Listening on ${bind}`);
});


process.on("SIGTERM", () => server.close(() => disconnectDb()));

connectDb().then(() => server.listen(port));
