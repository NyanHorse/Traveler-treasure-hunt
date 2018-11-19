const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("./helper");
require("dotenv").config();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "..", "dist", "index.html"));
});

router.get("/api/v1/game/players", (req, res, next) => {
  db("SELECT * FROM players;").then(results => {
    if (results.error) {
      res.status(404).send({ error: results.error });
    } else {
      res.send({ body: results.data });
    }
  });
});

router.post("/api/v1/game/players", (req, res, next) => {
  db(
    `INSERT INTO players (email, start_time) VALUES ('${req.body.email}', ${req.body.time}) RETURNING *;`
  ).then(results => {
    if (results.error) {
      res.status(404).send({ error: results.error });
    } else {
      res.send({ body: results.data });
    }
  });
});

router.patch("/api/v1/game/players", (req, res, next) => {
  db(
    `UPDATE players SET start_time = LOCALTIMESTAMP WHERE email = '${
      req.body.email
    }'`
  ).then(results => {
    if (results.error) {
      res.status(404).send({ error: results.error });
    } else {
      res.send({ body: results.data });
    }
  });
});

router.get("/api/v1/game/locations", (req, res, next) => {
  db("SELECT * FROM locations;").then(results => {
    if (results.error) {
      res.status(404).send({ error: results.error });
    } else {
      res.send({ body: results.data });
    }
  });
});

router.get("/api/v1/game/questions", (req, res, next) => {
  db("SELECT * FROM questions;").then(results => {
    if (results.error) {
      res.status(404).send({ error: results.error });
    } else {
      res.send({ body: results.data });
    }
  });
});

router.get("/api/v1/game/tasks", (req, res, next) => {
  db(
    "SELECT poi, details, question, answer_one, answer_two, answer_three FROM locations, questions WHERE question_id = 1;"
  ).then(results => {
    if (results.error) {
      res.status(404).send({ error: results.error });
    } else {
      res.send({ body: results.data });
    }
  });
});

module.exports = router;
