const jwt = require("jsonwebtoken");

module.exports.auth = (req, res, next) => {
   try {
      //   console.log("Token", req.headers);
      let token = req.headers.authorization.split(" ")[1];
      let decode = jwt.verify(token, "tricog");
      req.userData = decode;

      next();
   } catch (err) {
      return res.status(401).json({
         message: "Invalid Token!, please check your token",
      });
   }
};
