const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// User routes
router.post("/post",userController.createUser);
router.post("/login", userController.loginUser);

module.exports = router;
