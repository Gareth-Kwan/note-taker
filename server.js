//Declaring modules
const express = require("express");
const HTMLRouter = require("./routes/HTMLRoutes");
const APIRouter = require("./routes/APIRoutes");

//Set up express and assign the port number
const app = express();
const port = process.env.PORT || 3000;

//Allowing express to recognize data as JSON, string or arrays
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Set up static path to the files in public folder
app.use(express.static("public"));

//Routes to HTML and API
app.use("/", HTMLRouter);
app.use("/api", APIRouter);

// Listening for confirmation
app.listen(port, () => {
  console.log(`Server is listening on PORT http://localhost:${port}`);
});
