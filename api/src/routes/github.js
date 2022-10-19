const { Router } = require("express");
const router = Router();
const passport = require("passport");

router.get("/github", passport.authenticate("github"));

router.get(
  "/github/callback",
  passport.authenticate("github"),
  function (req, res) {
    res.redirect("http://localhost:3000/dashboard");
  }
);

router.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    if (err) return next(err);
  });
  res.clearCookie("connect.sid");
});

module.exports = router;
