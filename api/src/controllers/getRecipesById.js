const getAllRecipes = require("./getAllRecipes.js");

const getRecipesById = async({id})=> {

  console.log(typeof id)
  if(typeof id !== "string") throw new Error (`Incorrect data Type ${typeof id} needs to be a String`);

  const allRecipes =  await getAllRecipes();

  filteredRecipe = allRecipes.find(recipe => recipe.id.toString() === id);
  
  if(filteredRecipe.length === 0) throw new Error(`Can't find any recipe with the ID: "${id}"`);

  return filteredRecipe;

}

module.exports = getRecipesById;