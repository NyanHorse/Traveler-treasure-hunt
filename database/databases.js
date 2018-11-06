const pg = require("pg");
const connectionString =
  process.env.DATABASE_URL || "postgres://localhost:5432/game";

const client = new pg.Client(connectionString);
client.connect();

const query = client.query(
  "CREATE TABLE user(email VARCHAR(40) UNIQUE, start_time timestamp, end_time timestamp)",
  "CREATE TABLE locations(poi text, latitude float, logitude float, details text, question_id integer, FOREIGN KEY (question_id) REFERENCES questions (id))",
  "CREATE TABLE questions(id integer REFERENCES locations, question text, answer_one varchar, answer_two varchar, answer_three varchar, correct_answer integer)"
);

query.on("end", () => {
  client.end();
});
