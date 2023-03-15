const router = require("express").Router();
const postRecipes = require("../controllers/PostRecipes.js");

router.post("/recipes", async (req,res)=> {
  try {
    await postRecipes(req.body);
    res.status(201).send("The recipe was Created Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
})

module.exports = router;