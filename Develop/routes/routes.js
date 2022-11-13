const router = require("express").Router();

//Endpoint to get HTML from public file
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});
