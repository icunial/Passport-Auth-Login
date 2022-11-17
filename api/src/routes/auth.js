const { Router } = require("express");
const router = Router();

const { User } = require("../db");
const { v4: uuid4 } = require("uuid");

const bcrypt = require("bcryptjs");

const passport = require("passport");

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/login",
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/dashboard");
  }
);

module.exports = router;
