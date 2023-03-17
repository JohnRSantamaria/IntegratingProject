const router = require("express").Router();
const getRecipesDB = require("../controllers/getRecipesDB.js");

router.get("/db", async (req,res)=> {
  try {
    const response = await getRecipesDB();
    res.status(201).json(response);
  } catch (error) {
    res.send(error.message
      );
  }
})

module.exports = router
