import {
  GET_RECIPES,
  SEARCH_RECIPE,
  NINE_CARDS,
  FILTERED_RECIPES,
  SEARCH_RESULTS,
  GET_APIDATA,
  GET_DATABASE,
  ORDER_HEALTHIER,
  ORDER_ALPHA,
  LIST_OF_ERRORS,
  SET_ERROR
} from "./types";

export function getRecipes(recipes) {
  return {
    type: GET_RECIPES,
    payload: recipes,
  };
}

export function getNineCards(recipes) {
  return {
    type: NINE_CARDS,
    payload: recipes,
  };
}

export function filteredRecipes(filter) {
  return {
    type: FILTERED_RECIPES,
    payload: filter,
  };
}

export function searchRecipe(searchValue) {
  return {
    type: SEARCH_RECIPE,
    payload: searchValue,
  };
}

export function searchResults(data) {
  return {
    type: SEARCH_RESULTS,
    payload: data,
  };
}

export function getAPIdata(apiData) {
  return {
    type: GET_APIDATA,
    payload: apiData,
  };
}

export function getDatabase(data) {
  return {
    type: GET_DATABASE,
    payload: data,
  };
}

export function orderAlpha(order) {
  return {
    type: ORDER_ALPHA,
    payload: order,
  };
}

export function orderHalthier(order) {
  return {
    type: ORDER_HEALTHIER,
    payload: order,
  };
}

export function getListOfErrors(errors){
  return{
    type: LIST_OF_ERRORS,
    payload: errors
  }
} 

export function setError(errorState){
  return{
    type: SET_ERROR,
    payload: errorState
  }
}