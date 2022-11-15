const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const userRouter = require("./users");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);s
router.use("/users", userRouter);

module.exports = router;
