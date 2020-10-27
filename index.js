const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Use express router
app.use("/", require("./routes"));

app.listen(port, (err) => {
   if (err) {
      console.log(`Error in running the server on port: ${port}`);
   }
   console.log(`Server is running on port: ${port}`);
});
