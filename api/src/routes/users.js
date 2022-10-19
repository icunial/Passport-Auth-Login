const { Router } = require("express");
const router = Router();

const { User } = require("../db");
const { v4: uuid4 } = require("uuid");

const bcrypt = require("bcryptjs");

const passport = require("passport");

const nodemailer = require("nodemailer");
const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // port for secure SMTP
  auth: {
    user: "e.winemarketplace@gmail.com",
    pass: "yrzjdsfbehvmxtvt",
  },
});

router.get("/login", (req, res) => {
  res.send("Login");
});

router.get("/register", (req, res) => {
  res.send("Register");
});

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    if (!users.length) return res.status(404).json("No users");

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password, password2 } = req.body;

  if (!name || !email || !password || !password2) {
    return res.status(404).json("Please fill in all fields");
  }

  if (password !== password2) {
    return res.status(404).json("Passwords do not match");
  }

  if (password.length < 6) {
    return res.status(404).json("Password should be at least 6 characters");
  }

  try {
    const emailExist = await User.findOne({
      where: {
        email,
      },
    });

    if (emailExist) return res.status(404).json("User exists!");

    const newUser = await User.create({
      id: uuid4(),
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });

    var mailOptions = {
      from: "e.winemarketplace@hotmail.com",
      to: email,
      subject: "Creaste tu cuenta en E-Wines",
      /* html: `<h1>Gracias por registrarte en nuestra app!</h1>
      <a href="http://e-wine-ashen.vercel.app/">http://e-wine-ashen.vercel.app/</a>`, */
      html: await readFile("./message.html", "utf-8"),
      attachments: [
        {
          filename: "logo.jpeg",
          path: "./logo.jpeg",
        },
      ],
    };

    /*   await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }); */

    res.status(201).json(true);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) return res.status(404).json("No user exists!");
    req.logIn(user, (err) => {
      if (err) throw err;
      return res.status(200).json(true);
    });
  })(req, res, next);
});

router.get("/logout", (req, res, next) => {
  /* req.session.destroy(function (err) {
    if (err) return next(err);
  }); */
  req.logOut(function (err) {
    if (err) return next(err);
  });
  res.clearCookie("connect.sid");
  res.send(false);

  /* req.logout(function (err) {
    if (err) return next(err);
    res.send(false);
  }); */
});

router.get("/user", (req, res) => {
  console.log(req.user);
  if (req.user) return res.send(req.user);
  // store the entire user that has been authenticated
  else res.send(false);
});

module.exports = router;
