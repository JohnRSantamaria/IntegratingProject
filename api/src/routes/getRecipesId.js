const router = require("express").Router();
const getRecipesByID = require("../controllers/getRecipesById.js");

router.get("/recipes/:id", async (req,res)=> {
  const id = req.params;
  try {
    const response = await getRecipesByID(id);
    res.json(response);
  } catch (error) {
    res.status(404).send(error.message);
  }  
})

module.exports = router;