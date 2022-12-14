const router = require("express").Router();
const fs = require("fs");
const { readFile } = require("fs/promises");
const { v4: uuidv4 } = require("uuid");
const { readFromFile, readAndAppend, writeToFile } = require("../helpers/fsUtils");
const path = require("path");

// GET Route for retrieving the data from notes
router.get("/notes", (req, res) => {
  readFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// Post Route for post all the notes I enter to the page
router.post("/notes", (req, res) => {
  const { title, text, id } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    readAndAppend(newNote, "./db/db.json");
  } else {
    res.error("Error in adding new notes");
  }
});

// Delete Route to delete the note by ID
router.delete("/notes/:id", (req, res) => {
  const noteId = req.params.id;
  console.log(noteId);
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((text) => text.id !== noteId);
      writeToFile("./db/db.json", result);
    });
});

module.exports = router;
