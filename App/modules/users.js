const express = require("express");
const db = require("./db.js");
const router = express.Router();
const protect = require("./auth.js");
const { getAllToDoLists } = require("./db.js");

// endpoints ----------------------------

router.post("/", async function (req, res, next) {
  try {
    //something

    if (data.rows.length > 0) {
      res
        .status(200)
        .json({ msg: "You have successfully added item to to do list." })
        .end();
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
