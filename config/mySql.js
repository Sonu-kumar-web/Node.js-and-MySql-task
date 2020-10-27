const { createConnection } = require("mysql");

const database = createConnection({
   host: "localhost",
   user: "root",
   password: "2435",
   database: "tricog",
   multipleStatements: true,
});

database.connect((err) => {
   if (err) {
      console.log("Error in connection to mysql", err);
      return;
   }
   console.log("Successfully connected to the mysql");
});

module.exports = database;
