const pg = require("pg");
const connectionString =
  process.env.DATABASE_URL || "postgres://localhost:5432/game";

module.exports = async function getData(query) {
  const data = [];
  let error = null;

  await new Promise((resolve, reject) => {
    // Get a Postgres client from the connection pool
    pg.connect(
      connectionString,
      (err, client, done) => {
        // Handle connection errors
        if (err) {
          done();
          error = err;
          resolve();
        }
        // Create SQL query
        const q = client.query(query);
        // Stream data back one row at a time
        q.on("row", row => {
          data.push(row);
        });
        // After all data is returned, close connection and resolve promise
        q.on("end", () => {
          done(); //stops the connection
          resolve(); //stops the promise
        });
      }
    );
  });

  return { data: data, error: error };
};
