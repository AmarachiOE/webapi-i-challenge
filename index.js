// implement your API here
const express = require("express");
const db = require("./data/db.js");
const server = express();

server.use(express.json());

////////////// ENDPOINTS //////////////

// GET ALL USERS
server.get("/api/users", (req, res) => {
  db
    .find()
    .then(users => {
      res
        .status(200)
        .json(users);
    })
    .catch(err => {
      res.json({ error: err, message: "Oops! Something went wrong." });
    });
});

server.listen(5000, () => {
  console.log("\n*** Hey! Server listening on port 500! ***\n");
});
