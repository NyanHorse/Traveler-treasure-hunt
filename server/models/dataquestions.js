const pg = require("pg");
const connectionString =
  process.env.DATABASE_URL || "postgres://localhost:5432/game";

const client = new pg.Client(connectionString);
client.connect();

const query = client.query(
  "INSERT INTO questions(question, answer_one, answer_two, answer_three, correct_answer) VALUES('This is the first question', 'Option 1', 'Option 2', 'Option 3', 'answer_two'), ('This is the second question?', 'Option 1', 'Option 2', 'Option 3', 'answer_one'), ('This is the third question?', 'Option 1', 'Option 2', ' Option 3', 'answer_two'), ('This is the forth question?', 'Option 1', 'Option 2', 'Option 3', 'answer_three')"
);

query.on("end", () => {
  client.end();
});
