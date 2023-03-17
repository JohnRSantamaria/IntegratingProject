import { foodApi } from "../api/FoodApi";

export const fetchAPI = async ()=> {
  const allAPI = await foodApi.get("/api");

  return allAPI.data;
}