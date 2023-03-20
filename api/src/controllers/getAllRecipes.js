const getRecipesDB = require("./getRecipesDB.js");
const getRecipesAPI = require("./getRecipesAPI.js");

const getAllRecipes = async()=> {
  const recipesDB = await getRecipesDB();
  const recipesAPI = await getRecipesAPI();

  getAll = recipesDB.concat(recipesAPI);

  if(getAll.length === 0) throw new Error("Can't find any recipe.");

  return getAll;

};
module.exports = getAllRecipes;