import { foodApi } from "../api/FoodApi";

export const fetchAllDiets = async ()=> {
  const allDiets = await foodApi('/diets');

  return allDiets.data
}