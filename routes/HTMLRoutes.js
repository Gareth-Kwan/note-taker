const router = require("express").Router();
const path = require("path");

//Endpoint to get the index HTML from public file
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Endpoint to get notes HTML from public file
router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;
