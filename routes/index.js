const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("./helper");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "..", "dist", "index.html"));
});

router.get("/api/v1/game", (req, res, next) => {
  db("SELECT * FROM players;").then(results => {
    if (results.error) {
      res.status(404).send({ error: results.error });
    } else {
      res.send({ body: results.data });
    }
  });
});

router.post("/api/v1/game", (req, res, next) => {
  console.log(req.body);
  db(
    `INSERT INTO players (email) VALUES ('${req.body.email}') RETURNING *;`
  ).then(results => {
    if (results.error) {
      res.status(404).send({ error: results.error });
    } else {
      res.send({ body: results.data });
    }
  });
});

module.exports = router;
