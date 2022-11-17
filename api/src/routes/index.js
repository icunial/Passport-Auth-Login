const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const userRouter = require("./users");
const authRouter = require("./auth");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);s
router.use("/users", userRouter);
router.use("/auth", authRouter);

module.exports = router;
