const mysql = require("../../../config/mySql");

// get all users details
// @ api/v1/user
module.exports.users = async (req, res) => {
   await mysql.query("SELECT * FROM CUSTOMERS", (err, rows, fields) => {
      if (err) {
         return res.json({ message: "Internal server error" });
      } else {
         return res.send(rows);
      }
   });
};

// Insert data into table
// @ api/v1/insert
module.exports.insert = async (req, res) => {
   await mysql.query("");
};
