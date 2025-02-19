const express = require("express");
const router = express.Router();
const login = require("./login");
const signup = require("./signup");
const sendOtp = require("./sendOtp");
const resetPassword = require("./resetPassword");

router.post("/signup", signup);
router.post("/login", login);
router.post('/sendotp', sendOtp);
router.post('/resetpassword', resetPassword);

module.exports = router;
