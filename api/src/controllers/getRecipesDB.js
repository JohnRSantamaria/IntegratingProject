const { Recipe, Diets } = require("../db");

const getRecipesDB = async () => {
  const allRecipes = await Recipe.findAll({
    include: {
      model: Diets,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  const recipesWithDiets = allRecipes.map((recipe) => ({
    ...recipe.toJSON(),
    diets: recipe.diets.map((diet) => diet.name),
  }));
  
  return recipesWithDiets;
};



module.exports = getRecipesDB;
