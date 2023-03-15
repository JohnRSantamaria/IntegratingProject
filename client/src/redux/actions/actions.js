import { GET_RECIPES, SEARCH_RECIPE, NINE_CARDS, FILTERED_RECIPES} from "./types";

export function getRecipes  (recipes) {
  return {
    type: GET_RECIPES,
    payload: recipes
  }
}

export function searchRecipe (searchValue) {
  return {
    type : SEARCH_RECIPE,
    payload: searchValue
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