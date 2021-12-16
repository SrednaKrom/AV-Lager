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

// ------------------------------------
dbMethods.getAllToDoLists = function (userid) {
  let sql = "SELECT * FROM todolist WHERE userid = $1";
  let values = [userid];
  return pool.query(sql, values);
};

// export dbMethods -------------------------
module.exports = dbMethods;
