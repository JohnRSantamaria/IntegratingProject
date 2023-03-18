import { foodApi } from "../api/FoodApi.js";

export const fetchSearchById = async (id) => {
  const response = await foodApi.get(`/recipes/${id}`);
  return response.data
}