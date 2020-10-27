const express = require("express");
const router = express.Router();

const userController = require("../../../controllers/api/v1/users_controller");

router.get("/", userController.users);

module.exports = router;
