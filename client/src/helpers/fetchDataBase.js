import { foodApi } from "../api/FoodApi";

export const fetchDataBase = async()=> {
  const allDB = await foodApi.get("/db");

  return allDB.data;
}