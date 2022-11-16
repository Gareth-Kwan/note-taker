//Declaring modules
const express = require("express");
const HTMLRouter = require("./routes/HTMLRoutes");
const APIRouter = require("./routes/APIRoutes");
const path = require("path");

//Set up express and assign the port number
const app = express();
const port = process.env.PORT || 3000;

//Allowing express to recognize data as JSON, string or arrays
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Set up static path to the files in public folder
app.use(express.static("public"));

//Routes to HTML and API
// app.use("/", HTMLRouter);
app.use("/api", APIRouter);

//HTML Route

//Endpoint to get the index HTML from public file
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Endpoint to get notes HTML from public file
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Listening for confirmation
app.listen(port, () => {
  console.log(`Server is listening on PORT http://localhost:${port}`);
});
