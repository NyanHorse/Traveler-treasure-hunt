const pg = require("pg");
const connectionString =
  process.env.DATABASE_URL || "postgres://localhost:5432/game";

const client = new pg.Client(connectionString);
client.connect();

const query = client.query(
  "CREATE TABLE players(email VARCHAR UNIQUE, start_time timestamp, end_time timestamp); CREATE TABLE locations(poi text, lat float, lng float, details text, question_id integer); CREATE TABLE questions(id integer primary key, question text, answer_one varchar, answer_two varchar, answer_three varchar, correct_answer integer); ALTER TABLE locations ADD FOREIGN KEY (question_id) REFERENCES questions(id);"
);

query.on("end", () => {
  client.end();
});
