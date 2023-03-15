const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDiets = require("./getDiets.js");
const getRecipesId = require("./getRecipesId.js");
const getRecipesName = require("./getRecipesName.js");
const postRecipes = require("./postRecipes.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/",getDiets);
router.use("/",getRecipesId);
router.use("/",getRecipesName);
router.use("/",postRecipes);

module.exports = router;
