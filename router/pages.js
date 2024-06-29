const express = require("express");
const db = require("./db-config");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("home.html", { root: "./public/html" });
});

router.get("/signup", (req, res) => {
  res.sendFile("signup.html", { root: "./public/html" });
});

router.get("/login", (req, res) => {
  res.sendFile("login.html", { root: "./public/html" });
});

router.get("/forget",(req,res)=>{
    res.sendFile("forget.html",{root:"./public/html"})
})
module.exports = router;
