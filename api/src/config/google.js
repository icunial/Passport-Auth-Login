const GOOGLE_CLIENT_ID =
  "299866186395-evt7gful4jbfl5bctqnbp74c9a8i6h88.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const passport = require("./passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "auth/google/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
