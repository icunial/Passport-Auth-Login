const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const userRouter = require("./users");
const githubRouter = require("./github");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", (req, res) => {
  res.send("Welcome");
});
router.use("/users", userRouter);
router.use("/auth", githubRouter);

module.exports = router;
