import { GET_RECIPES, SEARCH_RECIPE, NINE_CARDS, FILTERED_RECIPES, SEARCH_RESULTS, GET_APIDATA, GET_DATABASE} from "./types";

export function getRecipes  (recipes) {
  return {
    type: GET_RECIPES,
    payload: recipes
  }
}

export function getNineCards (recipes) {
  return {
    type: NINE_CARDS,
    payload: recipes
  }
}

export function filteredRecipes (filter){
  return {
    type: FILTERED_RECIPES,
    payload: filter
  }
}

export function searchRecipe  (searchValue) {
  
  return {
    type: SEARCH_RECIPE,
    payload: searchValue
  }
}

export function searchResults (data) {
  return {
    type: SEARCH_RESULTS,
    payload: data
  }
}

export function getAPIdata (apiData) {
  return {
    type: GET_APIDATA,
    payload: apiData
  }
}

export function getDatabase (data) {
  return {
    type: GET_DATABASE,
    payload: data
  } 
}