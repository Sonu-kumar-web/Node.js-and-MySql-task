const express = require("express");
const port = 5000;
const mysql = require("./controllers/mySql");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.listen(port, (err) => {
   if (err) {
      console.log(`Error in running the server on port: ${port}`);
   }
   console.log(`Server is running on port: ${port}`);
});
