const express = require("express");
const server = express();
const PORT = process.env.PORT || 8080;

const db = require("./modules/db.js");
server.use(db);

server.set("port", PORT);
server.use(express.static("public"));
server.use(express.json());

// start server ------------------------
server.listen(server.get("port"), function () {
	console.log("server running", server.get("port"));
});

