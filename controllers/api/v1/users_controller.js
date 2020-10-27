const models = require("../../../models");

// get all users details
// @ api/v1/user
module.exports.users = async (req, res) => {
   //    await mysql.query("SELECT * FROM CUSTOMERS", (err, rows, fields) => {
   //       if (err) {
   //          return res.json(500, { message: "Internal server error" });
   //       } else {
   //          return res.send(rows);
   //       }
   //    });
};

// Insert data into table
// @ api/v1/user/insert
module.exports.insert = async (req, res) => {
   const data = {
      firstName: req.body.firstName,
      panCard: req.body.panCard,
      DOB: req.body.DOB,
      gender: req.body.gender,
      email: req.body.email,
      profileImage: req.body.profileImage,
   };

   try {
      await models.User.create(data);
      //   console.log("User Routes", user);

      return res.status(200).json({
         message: "user successfully logged in please keep the token safe",
         token: "",
      });
   } catch (err) {
      return res.status(500).json({
         message: "Internal server error",
         error: err,
      });
   }
};
