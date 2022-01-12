const pg = require("pg");
const dbURI =
  "postgres://thedrqlolzxjlg:f5feb32761f32df701608ab4f586d7435638ba10c9637d15c91acaaad13031fc@ec2-99-81-177-233.eu-west-1.compute.amazonaws.com:5432/dc56v5l2fbsicl";
const connstring = process.env.DATABASE_URL || dbURI;
const pool = new pg.Pool({
  connectionString: connstring,
  ssl: { rejectUnauthorized: false },
});

// database methods -------------------------

let dbMethods = {};

dbMethods.createUser = function (username, password, salt) {
  let sql =
    "INSERT INTO adminuser (id, username, password, salt) VALUES(DEFAULT, $1, $2, $3) returning *";
  let values = [username, password, salt];
  return pool.query(sql, values); //return the promise
};

// ------------------------------------
dbMethods.getUser = function (username) {
  let sql = "SELECT * FROM adminuser WHERE username = $1";
  let values = [username];
  return pool.query(sql, values); //return the promise
};

dbMethods.deleteUser = function (id) {
  let sql = "DELETE FROM adminuser WHERE id = $1 RETURNING *";
  let values = [id];
  return pool.query(sql, values); //return the promise
};
// export dbMethods -------------------------
module.exports = dbMethods;
