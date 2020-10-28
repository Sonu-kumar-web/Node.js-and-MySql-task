const models = require("../../../models");
const validation = require("../../../validators/validators");

// get all users details
// @ api/v1/users
module.exports.users = async (req, res) => {
   try {
      let users = await models.User.findAll();
      return res.status(200).json({
         data: users,
      });
   } catch (err) {
      console.log("Error", err);
      return res.status(500).json({
         message: "Internal server error",
         error: err,
      });
   }
};

// Insert data into table
// @ api/v1/user/insert
module.exports.insert = async (req, res) => {
   let validData = validation.validation(req);

   if (validData === true) {
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
   } else {
      return res.status(500).json({
         message: validData,
      });
   }
};
