const pg = require("pg");
const connectionString =
  process.env.DATABASE_URL || "postgres://localhost:5432/game";

const client = new pg.Client(connectionString);
client.connect();

const query = client.query(
  "INSERT INTO locations(poi, lat, lng, details, question_id) VALUES ('Sagrada Familia', 41.403629, 2.174356, 'Description of SG', 1), ('Recinte Modernista de Sant Pau', 41.412473, 2.174298, 'Description of RMDSP', 2), ('Bunkers del Carmel', 41.416660, 2.181660, 'Description of BC', 3), ('Park Güell', 41.415830, 2.148610, 'Description of PG', 4);"
);

query.on("end", () => {
  client.end();
});
