const express = require("express");
const router = express.Router();

const userAuth = require("../../../middleware/auth");

const userController = require("../../../controllers/api/v1/users_controller");

router.get("/", userAuth.auth, userController.currentUser);
router.get("/all-users", userAuth.auth, userController.users);

router.post("/insert", userController.insert);

module.exports = router;
