const getAllRecipes = require("./getAllRecipes.js");

const getRecipesName = async ({name})=> {
    
    const allRecipes = await getAllRecipes();

    if(!name) return allRecipes;
    const response = allRecipes.filter((recipe) => recipe.title.toLowerCase().includes(name.toLowerCase()));
    
    if(response.length === 0 ) throw new Error(`Can't find any recipe with the name: "${name}"`);

    return response;
}

module.exports = getRecipesName;