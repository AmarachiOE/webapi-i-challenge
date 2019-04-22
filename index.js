// implement your API here
const express = require("express");
const db = require("./data/db.js");
const server = express();

server.use(express.json());

server.listen(5000, () => {
    console.log("\n*** Hey! Server listening on port 500! ***\n");
});