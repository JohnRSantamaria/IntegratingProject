const {Diets, Recipe} = require("../db");

const postRecipes = async (data) => {

  const {healthScore,title,image,summary,steps,diets} = data;
  
  if(!healthScore || !title || !image || !summary || !steps) throw new Error ("Incomple data");

  const newRecipe = {
    healthScore: Number(healthScore),
    title,
    image: image[0],
    summary,
    steps
  }

  
//Making the Recipe
  const recipeCreated = await Recipe.create(newRecipe);
//Looking fro the name of the Diet
  diets.forEach(async (diet) => {
    const recipeDiet = await Diets.findOne({where:{name:diet}});
    // Linking the recipe and the Diet 
    await recipeCreated.addDiets(recipeDiet);
  });
}

module.exports = postRecipes;