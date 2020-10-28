const models = require("../../../models");
const validation = require("../../../validators/validators");
const jwt = require("jsonwebtoken");

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

   // Checking for duplicate email
   let userPresent = await models.User.findOne({
      where: { email: req.body.email },
   });

   // If email already exists
   if (userPresent) {
      return res.status(409).json({
         message: "Email already exists!",
      });
   } else {
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
            jwt.sign(data, "tricog", (err, token) => {
               return res.status(200).json({
                  message:
                     "User successfully logged in please keep the token safe",
                  token: token,
               });
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
   }
};
