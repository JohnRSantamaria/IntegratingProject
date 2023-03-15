const router = require("express").Router();
const getRecipesName = require("../controllers/getRecipesName.js");


router.get("/recipes", async (req, res) => {
  
  try {
    const response = await getRecipesName(req.query);
    if (!response || response.length === 0)throw new Error("There are no Characters with that name");
    
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
