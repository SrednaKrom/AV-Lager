const pg = require("pg");
const dbURI =
  "postgres://iwotirdlqdazmq:a24d19a472a8eaa00f8c708b462ef4ba1fef0ba3f12d88b71a23a6213ccf3ab6@ec2-34-251-245-108.eu-west-1.compute.amazonaws.com:5432/d912v2j0jqhh1o";
const connstring = process.env.DATABASE_URL || dbURI;
const pool = new pg.Pool({
  connectionString: connstring,
  ssl: { rejectUnauthorized: false },
});

// database methods -------------------------

let dbMethods = {};

// ------------------------------------
dbMethods.getAllToDoLists = function (userid) {
  let sql = "SELECT * FROM todolist WHERE userid = $1";
  let values = [userid];
  return pool.query(sql, values);
};

// export dbMethods -------------------------
module.exports = dbMethods;
