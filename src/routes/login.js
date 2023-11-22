const express = require("express");
const router = express.Router();

const loginControllers = require("../controllers/login");

router.post("/login", loginControllers.loginUsers);

module.exports = router;
