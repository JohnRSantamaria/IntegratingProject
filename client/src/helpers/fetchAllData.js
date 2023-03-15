import { foodApi } from "../api/FoodApi";

export const fetchAllData = async ()=> {
  const allRecipes = await foodApi.get('/recipes');
  
  return allRecipes.data

}