import { foodApi } from "../api/FoodApi.js";

export const fetchSearchDataByName = async (searchValue)=> {

  const response = await foodApi(`/recipes?name=${searchValue}`); 

  if(response.data === null) throw new Error("No hay personajes con ese nombre")
  return response.data;

}