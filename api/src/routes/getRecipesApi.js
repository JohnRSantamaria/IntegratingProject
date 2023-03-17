const router = require("express").Router();
const getRecipesAPI = require("../controllers/getRecipesAPI.js");

router.get("/api", async (req,res)=> {
  try {
    const response = await getRecipesAPI();
    res.status(201).json(response);
  } catch (error) {
    res.send(error.message
      );
  }
})

module.exports = router

