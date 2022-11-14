const router = require("express").Router();
const fs = require("fs");
const path = require("path");

router.get("/api/notes", (req, res) => {
  let data = fs.readFile("../db/db.json");
  let database = JSON.parse(data);
  res.send(database.notes);
});

module.exports = router;
