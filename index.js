// implement your API here
const express = require("express");
const db = require("./data/db.js");
const server = express();

server.use(express.json());

////////////// ENDPOINTS //////////////

// GET ALL USERS
server.get("/api/users", (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The users information could not be retrieved." });
    });
});

// GET USER BY ID


// POST NEW USER
server.post("/api/users", (req, res) => {
  const userInfo = req.body;
  console.log("Req Body: ", userInfo);
  if (!userInfo || !userInfo.name || !userInfo.bio ) {
      return res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
  }

  db.insert(userInfo)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error while saving the user to the database"
      });
    });
});

// DELETE USER
server.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  db.remove(userId)
    .then(deleted => {
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json({
        error: "The user could not be removed"
      });
    });
});

server.listen(5000, () => {
  console.log("\n*** Hey! Server listening on port 5000! ***\n");
});
