//Declaring modules
const express = require("express");
const fs = require("fs");

//Set up express and assign the port number
const app = express();
const port = process.env.port || 3000;

//Allowing express to recognize data as JSON, string or arrays
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Set up static path to the files in public folder
app.use(express.static("public"));

// Listening for confirmation
app.listen(PORT, () => {
  console.log(`Server is listening on PORT http://localhost:${PORT}`);
});
