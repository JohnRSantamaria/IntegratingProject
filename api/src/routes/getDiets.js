const router = require("express").Router();
const getDiets = require("../controllers/getDiets.js");


router.get("/diets", async (req,res)=> {
  try {
    const response = await getDiets();
    res.status(201).json(response);
  } catch (error) {
    res.send(error.message);
  }
})

module.exports = router;