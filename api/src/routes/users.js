const { Router } = require("express");
const router = Router();

const { User } = require("../db");
const { v4: uuid4 } = require("uuid");

router.get("/login", (req, res) => {
  res.send("Login");
});

router.get("/register", (req, res) => {
  res.send("Register");
});

module.exports = router;
